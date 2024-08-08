"use client";

import { useFormStatus } from "react-dom";

export default function FormStatus() {
  const { pending } = useFormStatus();
  console.log(pending);

  if (pending) {
    return <button>Creating Post...</button>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
