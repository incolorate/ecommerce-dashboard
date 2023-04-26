import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import ProductForm from "../../../components/ProductForm";

export default function Delete() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState([]);
  const { delete: id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  const navigate = () => {
    router.push(`/products`);
  };

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    navigate();
  }
  return (
    <Layout>
      <h2>Delete: {productInfo.title}?</h2>
      <div className="mt-6 flex gap-8">
        <button
          className="bg-red-600 px-12 p-2 rounded-xl"
          onClick={deleteProduct}
        >
          Yes
        </button>
        <button
          onClick={navigate}
          className="bg-yellow-400 text-black px-12 p-2 rounded-xl"
        >
          No
        </button>
      </div>
    </Layout>
  );
}
