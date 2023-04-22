import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

import { RxPencil1 } from "react-icons/rx";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/api/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <Layout>
        <table className="mb-6 border-purple-500 border w-full">
          <thead className="bg-purple-100 text-black">
            <tr>
              <td>Products</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.title} className="bg-purple-100 bg-opacity-10">
                  <td className="p-2">{product.title}</td>
                  <td className="p-2">
                    <Link href={`/products/edit/${product._id}`}>
                      <div className="bg-yellow-400 text-black rounded-md w-fit p-2 px-4 flex justify-center gap-2 items-center">
                        <RxPencil1 />
                        <p>Edit</p>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Loading</td>
              </tr>
            )}
          </tbody>
        </table>

        <Link
          href="/products/newproduct"
          className="bg-yellow-400 text-black p-2 rounded-xl"
        >
          New Product
        </Link>
      </Layout>
    </div>
  );
}