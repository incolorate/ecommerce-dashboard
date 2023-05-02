import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { edit: id } = router.query;
  const [categoryName, setCategoryName] = useState();
  console.log(id);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/category?id=" + id).then((response) => {
      setCategoryName(response.data.name);
    });
  }, []);

  const updateName = async (e) => {
    e.preventDefault();
    await axios.put(`/api/category`, { name: categoryName, id });
  };

  return (
    <Layout>
      <h2 className="mb-2">
        Do you want to edit:
        <span className="text-red-500"> {categoryName}</span> ?
      </h2>
      <form onSubmit={updateName}>
        <label>New name: </label>
        <input
          value={categoryName}
          className="text-black p-2"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </Layout>
  );
}
