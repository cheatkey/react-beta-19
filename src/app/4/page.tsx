"use client";
import React, { useOptimistic, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

interface FourthPageProps {}

const FourthPage = ({}: FourthPageProps) => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [optimisticName, setOptimisticName] = useOptimistic("");

  const handleSubmit = async (formData: FormData) => {
    const value = formData.get("name") as string;

    startTransition(async () => {
      setOptimisticName(value);
      console.log("낙관적 업데이트");

      const response = await fetch(`/4/api`, {
        method: "POST",
        body: JSON.stringify({ name: value }),
      });
      console.log("POST 요청 보냄");

      const data = await response.json();
      console.log(data.name);

      setName(data.name);
      console.log("데이터 설정");
    });
  };

  return (
    <div>
      <form action={handleSubmit}>
        <Form />
      </form>

      <p>isPending: {JSON.stringify(isPending)}</p>
      <p>name: {name}</p>
      <p>optimisticName: {optimisticName}</p>
    </div>
  );
};

export default FourthPage;

const Form = () => {
  const { pending, data } = useFormStatus();

  console.log("pending:", pending, "data:", data?.get("name"));
  return (
    <>
      <label htmlFor="name">Update Name:</label>
      <input className="text-black" id="name" type="text" name="name" />
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        disabled={pending}
      >
        Submit
      </button>
    </>
  );
};
