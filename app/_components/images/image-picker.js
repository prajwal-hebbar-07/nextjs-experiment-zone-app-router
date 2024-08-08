"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedIage] = useState();
  const imageInput = useRef();

  function handleButtonClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedIage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickedIage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Image Yet!</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg, image/jpg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
