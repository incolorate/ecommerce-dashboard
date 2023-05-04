import { Category } from "../../lib/models/Categories";
import { mongooseConnect } from "../../lib/mongoose";
import Nextauth from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Category.findOne({ _id: req.query.id }));
    } else {
      res.json(await Category.find());
    }
  }
  if (method === "POST") {
    const { category: name } = req.body;
    const categoryDoc = await Category.create({ name });
    res.json(categoryDoc);
  }
  if (method === "PUT") {
    const { name, id: _id } = req.body;
    await Category.updateOne({ _id }, { name });
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      res.json(await Category.deleteOne({ _id: req.query.id }));
    }
  }
}
