"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres"; // Adjust based on your DB client
import { revalidatePath } from "next/cache";

export type State = {
  errors?: Record<string, string[]>;
  message?: { success: boolean; text: string } | null;
};

// Define validation schema with Zod ensuring a whole number for numProducts
// and validating optional Reddit and Facebook profile URLs.
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
  redditLink: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().url("Please enter a valid Reddit profile URL").optional()
  ),
  fbLink: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().url("Please enter a valid Facebook profile URL").optional()
  ),
});

// Create a custom error interface to type our database errors.
interface DatabaseError extends Error {
  code?: string;
}

export async function registerEmail(
  prevState: State,
  formData: FormData
): Promise<State> {
  // Extract fields from formData
  const rawFields = {
    email: formData.get("email")?.toString() || "",
    role: formData.get("role")?.toString() as "buyer" | "seller",
    numProducts: formData.get("numProducts")?.toString() || "0",
    redditLink: formData.get("redditLink")?.toString() || "",
    fbLink: formData.get("fbLink")?.toString() || "",
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
  const { email, role, numProducts, redditLink, fbLink } = parsed.data;

  try {
    // Insert into PostgreSQL database
    await sql`
      INSERT INTO waitlist (email, role, num_products, reddit_profile, facebook_profile)
      VALUES (${email}, ${role}, ${numProducts}, ${redditLink}, ${fbLink})
    `;

    // Optionally revalidate cache if needed
    revalidatePath("/");

    // Return a success message with errors cleared
    return {
      ...prevState,
      errors: {},
      message: { success: true, text: "Registration successful" },
    };
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error("Database Error:", dbError);
    // Check if the error is a duplicate key error (PostgreSQL code 23505)
    if (dbError.code === "23505") {
      return {
        ...prevState,
        message: {
          success: false,
          text: "This email is already registered.",
        },
      };
    }
    return {
      ...prevState,
      message: {
        success: false,
        text: "Failed to register email. Please try again later.",
      },
    };
  }
}