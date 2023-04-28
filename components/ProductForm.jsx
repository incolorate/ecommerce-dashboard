import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
export default function ProductForm({
  _id,
  action,
  title,
  description,
  price: existingPrice,
  images: existingImages,
}) {
  const [productName, setProductName] = useState(title || "");
  const [productDescription, setProductDescription] = useState(
    description || ""
  );

  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const router = useRouter();
  const navigate = () => {
    router.push(`/products`);
  };

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

  const updateImage = async (e) => {
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((prevImages) => {
        return [...prevImages, ...res.data.links];
      });
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
        <label>Photos</label>

        <div>
          <div className="flex gap-2 mb-2">
            {!!images?.length &&
              images.map((link) => {
                return (
                  <div key={link} className="h-24 w-24">
                    <img src={link} alt="product-image" className="h-full" />
                  </div>
                );
              })}
          </div>
          <div className="mb-2 bg-blue-600 p-2 px-4 rounded-xl w-32">
            <label className="flex justify-center cursor-pointer">
              Upload
              <input type="file" className="hidden" onChange={updateImage} />
            </label>
          </div>
          {!images?.length && <div>No images</div>}
        </div>
        <label>Price:</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          min={0}
          className="max-w-md rounded-md bg-slate-100 text-black p-2"
        />
        <div className="w-80 flex gap-2">
          <button
            onClick={navigate}
            className="p-2 px-4 bg-yellow-400 rounded-md mt-4 text-black"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
