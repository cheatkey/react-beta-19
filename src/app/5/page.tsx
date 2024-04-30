import React from "react";
interface FifthPageProps {}

const FifthPage = ({}: FifthPageProps) => {
  return (
    <section className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1>Support for Document Metadata</h1>
        <title>hello world</title>
        <p>title is hello world</p>
      </section>

      <section className="flex flex-col gap-2">
        <h1>Support for stylesheets</h1>
        <link rel="stylesheet" href="./text.css" precedence="default" />
      </section>

      <section className="flex flex-col gap-2">
        <h1>Support for async scripts</h1>
        <script async={true} src="./async-js.js" />
      </section>
    </section>
  );
};

export default FifthPage;
