import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");

  const newProduct = async (e) => {
    e.preventDefault();
    const product = {
      title: productName,
      description: productDescription,
      price,
    };
    await axios.post(`/api/products`, product);
    setPrice("0");
    setProductName("");
    setProductDescription("");
  };

  return (
    <div>
      <Layout>
        <h2 className="text-2xl mb-4">New product:</h2>
        <form onSubmit={newProduct} className="flex flex-col gap-2">
          <label>Product name:</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            className="max-w-md rounded-md bg-slate-100 text-black p-2"
          />
          <label>Description:</label>
          <input
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
            className="max-w-md h-36 rounded-md bg-slate-100 text-black p-2"
          />
          <label>Price:</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            min={0}
            className="max-w-md rounded-md bg-slate-100 text-black p-2"
          />
          <button className="p-2  bg-yellow-400 rounded-md mt-4 text-black">
            Create
          </button>
        </form>
      </Layout>
    </div>
  );
}
