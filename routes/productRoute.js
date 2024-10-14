import express from 'express';
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/productController.js';

const router = express.Router();
//get all product

router.get('/', getAllProducts);
// Route to create a new product
router.post('/create', createProduct);

// Route to delete a product by ID
router.delete('/delete/:id', deleteProduct);

// Route to update a product by ID
router.put('/update/:id', updateProduct);

export default router;
