import { useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products/?=${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id]);

  console.log(router);

  return <Layout>{id}</Layout>;
}
