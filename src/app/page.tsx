import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  redirect("/article");
  return null;
};

export default Home;
