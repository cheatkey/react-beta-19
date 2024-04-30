import React from "react";
interface SecondPageProps {}

const fetchPost = async (
  id: number
): Promise<{ userId: number; id: number; title: string; body: string }> =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

const SecondPage = async ({}: SecondPageProps) => {
  const data = await fetchPost(1);
  return (
    <section>
      <h1>title is {data.title}</h1>
      <button
      // onClick={() => {
      //   alert("click");
      // }}
      ></button>
    </section>
  );
};

export default SecondPage;
