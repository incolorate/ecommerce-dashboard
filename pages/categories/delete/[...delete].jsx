import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Delete() {
  const router = useRouter();
  const { delete: id } = router.query;
  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/category?id=" + id).then((response) => {
      setCategoryName(response.data.name);
    });
  }, []);

  const deleteProduct = async (e) => {
    e.preventDefault();
    await axios.delete("/api/category?id=" + id);
    navigate();
  };

  const navigate = () => {
    router.push(`/categories`);
  };

  return (
    <Layout>
      <h2 className="mb-2 text-2xl">
        Do you want to delete:
        <span className="text-red-500"> {categoryName}</span> ?
      </h2>
      <form onSubmit={deleteProduct} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button type="submit" className="p-2 bg-red-600 px-10 rounded-lg">
            Delete
          </button>
          <button
            type="button"
            className="p-2 bg-yellow-300 text-black px-10 rounded-lg"
            onClick={navigate}
          >
            Cancel
          </button>
        </div>
      </form>
    </Layout>
  );
}
