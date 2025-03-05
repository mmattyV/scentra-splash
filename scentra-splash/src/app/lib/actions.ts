"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres"; // Adjust based on your DB client
import { revalidatePath } from "next/cache";

export type State = {
  errors?: Record<string, string[]>;
  message?: { success: boolean; text: string } | null;
};

// Define validation schema with Zod ensuring a whole number for numProducts
const RegisterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["buyer", "seller"]),
  numProducts: z.preprocess(
    (val) => (val === "" ? 0 : Number(val)),
    z
      .number()
      .int("Please enter a whole number")
      .nonnegative("Please enter a number greater than or equal to 0")
  ),
});

export async function registerEmail(
  prevState: State,
  formData: FormData
): Promise<State> {
  // Extract fields from formData
  const rawFields = {
    email: formData.get("email")?.toString() || "",
    role: formData.get("role")?.toString() as "buyer" | "seller",
    numProducts: formData.get("numProducts")?.toString() || "0",
  };

  // If user is a buyer, set numProducts to "0"
  if (rawFields.role === "buyer") {
    rawFields.numProducts = "0";
  }

  // Validate with Zod
  const parsed = RegisterSchema.safeParse(rawFields);
  if (!parsed.success) {
    return {
      ...prevState,
      errors: parsed.error.flatten().fieldErrors,
      message: {
        success: false,
        text: "Validation failed. Please check your inputs.",
      },
    };
  }

  // Extract validated data
  const { email, role, numProducts } = parsed.data;

  try {
    // Insert into PostgreSQL database
    await sql`
      INSERT INTO waitlist (email, role, num_products) 
      VALUES (${email}, ${role}, ${numProducts})
    `;

    // Optionally revalidate cache if needed
    revalidatePath("/");

    // Return a success message with errors cleared
    return {
      ...prevState,
      errors: {},
      message: { success: true, text: "Registration successful" },
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      ...prevState,
      message: {
        success: false,
        text: "Failed to register email. Please try again later.",
      },
    };
  }
}