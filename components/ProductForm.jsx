import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
export default function ProductForm({
  _id,
  action,
  title,
  description,
  price: existingPrice,
}) {
  const [productName, setProductName] = useState(title || "");
  const [productDescription, setProductDescription] = useState(
    description || ""
  );
  const [price, setPrice] = useState(existingPrice || "");
  const router = useRouter();
  const handleProduct = async (e) => {
    e.preventDefault();
    const product = {
      title: productName,
      description: productDescription,
      price,
    };
    if (_id) {
      await axios.put(`/api/products`, { ...product, _id });
    } else {
      await axios.post(`/api/products`, product);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">{action}:</h2>
      <form onSubmit={handleProduct} className="flex flex-col gap-2">
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
        <div className="w-80 flex gap-2">
          <button className="p-2 px-4 bg-yellow-400 rounded-md mt-4 text-black">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
