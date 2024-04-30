import React, { use } from "react";

interface JsonPlaceHolderProps {
  id: number;
}

const fetchPost = async (
  id: number
): Promise<{ userId: number; id: number; title: string; body: string }> =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

const JsonPlaceHolder = ({ id }: JsonPlaceHolderProps) => {
  if (id % 2 === 0) {
    return <p>id가 짝수인 경우에는 데이터를 보여주지 않습니다.</p>;
  }

  const data = use(fetchPost(id));

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default JsonPlaceHolder;
