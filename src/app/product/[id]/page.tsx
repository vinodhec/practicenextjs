"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products`);
      const data = await response.json();
      console.log(data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <p>This is a product ID: {id}</p>
    </div>
  );
}

export default page;
