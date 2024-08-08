"use client";

import { useFormState } from "react-dom";

import ImagePicker from "@/app/_components/images/image-picker";
import MealSubmitButton from "@/app/_components/meals/meal-submit-button";

import { shareMeal } from "@/app/_lib/actions";

import styles from "./page.module.css";

export default function ShareMealPage() {
  const [state, formState] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favourite meal!</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formState}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Photo" name="image" />
          <p>{state.message && <p>{state.message}</p>}</p>
          <p className={styles.actions}>
            <MealSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
