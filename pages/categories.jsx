import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";
import { RxPencil1, RxTrash } from "react-icons/rx";
export default function Categories() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    updateCategoryList();
  }, []);
  const updateCategoryList = () => {
    axios.get("api/category").then((result) => setCategories(result.data));
  };

  const createCategory = async (e) => {
    e.preventDefault();
    await axios.post("api/category", { category });
    setCategory("");
    updateCategoryList();
  };
  console.log(categories);
  return (
    <div>
      <Layout>
        <form className="flex flex-col gap-3" onSubmit={createCategory}>
          <label>Create product category</label>
          <input
            type="text"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            className="w-60 p-2 text-black"
          />
          <button type="submit" className="w-32 bg-blue-500 rounded-lg p-2">
            Create
          </button>
        </form>

        <table className="mb-6 border-purple-500 border w-full mt-4">
          <thead className="bg-purple-100 text-black">
            <tr>
              <td>Category name</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <tr key={category.name}>
                  <td>{category.name}</td>
                  <td className="p-2 flex gap-4">
                    <Link href={`/categories/edit/${category._id}`}>
                      <div className="bg-yellow-400 text-black rounded-md w-fit p-1 px-4 flex justify-center gap-2 items-center">
                        <RxPencil1 />
                        <p>Edit</p>
                      </div>
                    </Link>
                    <Link href={`/categories/delete/${category._id}`}>
                      <div className="bg-red-600 text-white rounded-md w-fit p-1 px-4 flex justify-center gap-2 items-center">
                        <RxTrash />
                        <p>Delete</p>
                      </div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layout>
    </div>
  );
}
