"use server";

import { redirect } from "next/navigation";

import { createUser } from "@/lib/users";
import { hashUserPassword } from "@/lib/hash";
import { createAuthSession } from "@/lib/auth";

export async function signUp(prevData, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address!";
  }

  if (password.trim().length < 8) {
    errors.email = "Please must be atleast 8 characters long!";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const encryptedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, encryptedPassword);
    await createAuthSession(id);
  } catch (error) {
    if ((error.code = "SQLITE_CONSTRAINT_UNIQUE")) {
      return {
        errors: {
          email: "Entered email-id already exists!",
        },
      };
    }
    throw error;
  }

  redirect("/training");
}
