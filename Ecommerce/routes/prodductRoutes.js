import { Router } from "express"
import auth from "../middlewares/auth.middleware.js"
import {
  allProducts,
  myProducts,
  productForm,
  addProduct
} from "../controllers/product.controller.js"

const router = Router()

router.get("/", auth, allProducts)
router.get("/mine", auth, myProducts)
router.get("/add", auth, productForm)
router.post("/add", auth, addProduct)

export default router
