import { auth } from "@/auth";
import { SignIn } from "@/app/components/SignIn";

const sessionProvider = async () => {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return session;
};

export default sessionProvider;
