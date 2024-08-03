const express = require("express");
const { 
  getAllProducts, 
  getNewCollections, 
  getPopularProducts, 
  getRelatedProducts, 
  addToCart, 
  removeFromCart, 
  getCart, 
  addProduct, 
  removeProduct 
} = require("../controllers/productController");
const fetchUser = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/allproducts", getAllProducts);
router.get("/newcollections", getNewCollections);
router.get("/popular", getPopularProducts);
router.post("/relatedproducts", getRelatedProducts);
router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCart);
router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);

module.exports = router;
