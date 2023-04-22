import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Image from "next/image";
export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <Layout>
        <div className="flex justify-end">
          <div className="flex justify-center bg-slate-200 bg-opacity-10 rounded-xl p-2 align-middle text-center">
            <img
              src={data?.user?.image}
              alt="user-image"
              width={42}
              height={42}
            />
            <p className="text-2xl">Welcome {data?.user?.name}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
