import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";

export default function Settings() {
  return (
    <div>
      <Layout>Settings</Layout>
    </div>
  );
}
