import Head from "next/head";
import { useState } from "react";
import { Index } from "../components/Index";
import { data } from "../services/data";

export default function Home() {
  return (
    <>
    <Head>
      <title>Books | Neil Gaiman</title>
    </Head>
      <Index/>
    </>
  )
}
