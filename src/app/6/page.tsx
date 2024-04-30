"use client";
import React, { useState } from "react";
import { preload } from "react-dom";

interface SixthPageProps {}

const SixthPage = ({}: SixthPageProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          preload("https://placehold.co/600x400.png", { as: "image" });
        }}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        preloading
      </button>

      <button
        onClick={() => {
          setShow(true);
        }}
      >
        get Image
      </button>

      {show && <img src={"https://placehold.co/600x400.png"} />}
    </>
  );
};

export default SixthPage;
