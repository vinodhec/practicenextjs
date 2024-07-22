"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

function Dynamic() {
  const query = useParams();
  return <div>page this is a dynamic page with id {query?.id}</div>;
}

export default Dynamic;
