import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <div>
      <Layout>
        <Link
          href="/products/newproduct"
          className="bg-yellow-400 text-black p-2 rounded-xl"
        >
          New Product
        </Link>
      </Layout>
    </div>
  );
}
