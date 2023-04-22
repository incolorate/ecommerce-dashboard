import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import ProductForm from "../../../components/ProductForm";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  return (
    <Layout>
      {productInfo && (
        <ProductForm action="Edit product" _id={id} {...productInfo} />
      )}
    </Layout>
  );
}
