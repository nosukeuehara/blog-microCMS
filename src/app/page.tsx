import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  redirect("/static");
  return null;
};

export default Home;
