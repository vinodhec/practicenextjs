"use client";
import Head from "next/head";

export default function () {
  return (
    <div>
      <Head>
        <title>This is about page</title>
        <meta name="description" content="This is about page"></meta>
      </Head>
      <h1>About Vinodh Thangavel</h1>
      <p>My name is Vinodh, I love my son Pranav very much</p>

      <style jsx>{`
        div {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          color: blue;
        }
      `}</style>
    </div>
  );
}
