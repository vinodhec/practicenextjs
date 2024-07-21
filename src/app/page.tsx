"use client";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta
          name="description"
          content="Welcome to Next.js practice home page"
        ></meta>
      </Head>
      <h1>Hello, Next.js!</h1>
      <p>Welcome to the practice home page</p>

      <style jsx>{`
        div {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          color: grey;
        }
      `}</style>
    </div>
  );
}
