import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function Delete() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <div>hello</div>
    </Layout>
  );
}
