import { redirect } from "next/navigation";

const Home = () => {
  redirect("/article");
  return null;
};

export default Home;
