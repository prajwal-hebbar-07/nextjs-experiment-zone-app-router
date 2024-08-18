"use server";

import { createUser } from "@/lib/users";
import { hashUserPassword } from "@/lib/hash";

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
  createUser(email, encryptedPassword);
}
