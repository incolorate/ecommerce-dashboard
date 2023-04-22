import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm";

export default function NewProduct() {
  const newProduct = async (productName, productDescription, price) => {
    const product = {
      title: productName,
      description: productDescription,
      price,
    };
    await axios.post(`/api/products`, product);
  };

  return (
    <div>
      <Layout>
        <ProductForm onEdit={newProduct} action="New Product" />
      </Layout>
    </div>
  );
}
