import React, { useState } from "react";
import { getDB } from "./db";

interface ThirdPageProps {}

const ThirdPage = ({}: ThirdPageProps) => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const db = await getDB();

    db.data.push({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });
    await db.write();
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="name">Name:</label>
      <input className="text-black" type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input className="text-black" type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea className="text-black" id="message" name="message" />

      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ThirdPage;
