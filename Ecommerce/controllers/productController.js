import Product from "../models/Product.js"
import Category from "../models/category.js"


export const allProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .populate("user", "username")

    res.render("productList", { products })
  } catch (err) {
    res.status(500).send("Failed to fetch products")
  }
}


export const myProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id })
      .populate("category", "name")

    res.render("myProducts", { products })
  } catch (err) {
    res.status(500).send("Failed to fetch user products")
  }
}


export const productForm = async (req, res) => {
  try {
    const categories = await Category.find()
    res.render("productForm", { categories })
  } catch (err) {
    res.status(500).send("Failed to load form")
  }
}


export const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body

    await Product.create({
      name,
      price,
      category,
      user: req.user.id
    })

    res.redirect("/products")
  } catch (err) {
    res.status(500).send("Product creation failed")
  }
}

export const productsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.categoryId
    }).populate("category", "name")

    res.render("productList", { products })
  } catch (err) {
    res.status(500).send("Category filter failed")
  }
}



