const Product = require("../models/Product");
const User = require("../models/User");

const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  console.log("All Products");
  res.send(products);
};

const getNewCollections = async (req, res) => {
  let products = await Product.find({});
  let arr = products.slice(0).slice(-4);
  console.log("New Collections");
  res.send(arr);
};

const getPopularProducts = async (req, res) => {
  let products = await Product.find({});
  
  // Fisher-Yates Shuffle to randomize the products array
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }
  let arr = products.slice(1, 9);
  console.log("Popular");
  res.send(arr);
};

const getRelatedProducts = async (req, res) => {
  console.log("Related Products");
  const { category } = req.body;
  const products = await Product.find({ category });
  const arr = products.slice(0, 4);
  res.send(arr);
};

const addToCart = async (req, res) => {
  console.log("Add Cart");
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added");
};

const removeFromCart = async (req, res) => {
  console.log("Remove Cart");
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] != 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Removed");
};

const getCart = async (req, res) => {
  console.log("Get Cart");
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userData.cartData);
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addProduct = async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  console.log("Saved");
  res.json({ success: true, name: req.body.name });
};

const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({ success: true, name: req.body.name });
};

module.exports = {
  getAllProducts,
  getNewCollections,
  getPopularProducts,
  getRelatedProducts,
  addToCart,
  removeFromCart,
  getCart,
  addProduct,
  removeProduct,
};
