import mongoose from "mongoose";
import { mongooseConnect } from "../../lib/mongoose";

import { Product } from "../../lib/models/Product";

export default async function product(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }
  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    await Product.updateOne({ _id }, { title, description, price });
  }
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productData = await Product.create({
      title,
      description,
      price,
    });
    res.json(productData);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      res.json(await Product.deleteOne({ _id: req.query.id }));
    }
  }
}
