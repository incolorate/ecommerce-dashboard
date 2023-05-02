import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { edit: id } = router.query;
  const [oldName, setOldName] = useState("");
  const [categoryName, setCategoryName] = useState();
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/category?id=" + id).then((response) => {
      setCategoryName(response.data.name);
      setOldName(response.data.name);
    });
  }, []);

  const updateName = async (e) => {
    e.preventDefault();
    await axios.put(`/api/category`, { name: categoryName, id });
    navigate();
  };

  const navigate = () => {
    router.push(`/categories`);
  };

  return (
    <Layout>
      <h2 className="mb-2">
        Do you want to edit:
        <span className="text-red-500"> {oldName}</span> ?
      </h2>
      <form onSubmit={updateName} className="flex flex-col gap-2">
        <label>New name: </label>
        <input
          value={categoryName}
          className="text-black p-2"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <div className="flex gap-2">
          <button type="submit" className="p-2 bg-red-600 px-10 rounded-lg">
            Save
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
