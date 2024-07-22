import { auth } from "@/auth";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";

const Home = async () => {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div>
      {session.user.name}
      <SignOut />
      <img
        src={session.user.image}
        alt={session.user.name}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Home;
