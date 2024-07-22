import { signOut } from "@/auth";

export function SignOut({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <button>ログアウト</button>
    </form>
  );
}
