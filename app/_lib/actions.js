"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isValid(input) {
  return !input || input.trim() === "";
}

export async function shareMeal(formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isValid(meal.title) ||
    isValid(meal.summary) ||
    isValid(meal.instructions) ||
    isValid(meal.creator) ||
    isValid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input");
  }
  await saveMeal(meal);
  redirect("/meals");
}
