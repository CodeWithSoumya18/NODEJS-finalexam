import { Router } from "express"
import auth from "../middlewares/authMiddleware.js"
import {
  allProducts,
  myProducts,
  productForm,
  addProduct,
  productsByCategory
} from "../controllers/productController.js"

const router = Router()

router.get("/", auth, allProducts)
router.get("/mine", auth, myProducts)
router.get("/add", auth, productForm)
router.post("/add", auth, addProduct)
router.get("/category/:categoryId", auth, productsByCategory)

export default router
