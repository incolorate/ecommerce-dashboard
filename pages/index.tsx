import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Image from "next/image";
export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <Layout>
        <p className="text-2xl">Welcome {data?.user?.name}</p>
        <img src={data?.user?.image} alt="user-image" width={32} height={32} />
      </Layout>
    </div>
  );
}
