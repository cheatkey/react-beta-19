"use client";
import React, { Suspense, useState } from "react";
import JsonPlaceHolder from "./JsonPlaceHolder";

interface FirstPageProps {}

const FirstPage = ({}: FirstPageProps) => {
  const [id, setID] = useState(1);

  return (
    <section className="flex flex-col gap-5">
      <h1>id: {id}</h1>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => {
          setID((v) => v + 1);
        }}
      >
        increase
      </button>

      <Suspense fallback={<>loading...</>}>
        <JsonPlaceHolder id={id} />
      </Suspense>
    </section>
  );
};

export default FirstPage;

// 1. 롯데시네마 영화 보기

// 2. 스타벅스 가보고 너무 시끄러우면 스터디 카페

// 3. 밥은 롯데몰 한번 둘러보기 (커리)

// 4.
