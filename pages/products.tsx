import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <div>
      <Layout>Products</Layout>
    </div>
  );
}