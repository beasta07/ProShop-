import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

//@desc Fetch a products
//@route GET /api/products/:_id
//@access Public
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);  // ✅ Stops execution here if found
    }
    else{
        res.status(404);
        throw new Error('Product not found');
    }

    
})
export
{
    getProducts,
    getProductsById
}