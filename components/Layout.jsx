import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="w-full h-full flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="rounded-md text-black p-2 px-4 bg-yellow-300"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen">
      <Nav />
      <div className="flex-grow p-4 m-4 bg-slate-300 bg-opacity-10 rounded-xl text-white min-h-full">
        <div>{children}</div>
      </div>
    </div>
  );
}
