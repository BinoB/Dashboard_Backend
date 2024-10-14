import Product from '../models/productModel.js'; // Import the Product model


// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};
// Controller to create a new product
export const createProduct = async (req, res) => {
    try {
        const { productName, category, price, salePrice, stock, status, published } = req.body;

        // Create a new product instance
        const newProduct = new Product({
            productName,
            category,
            price,
            salePrice,
            stock,
            status,
            published
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: savedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};

// Controller to delete a product
export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Get product ID from URL params
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

// Controller to update a product
export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Get product ID from URL params
        const { productName, category, price, salePrice, stock, status, published } = req.body;

        // Find the product by ID and update it
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                productName,
                category,
                price,
                salePrice,
                stock,
                status,
                published
            },
            { new: true, runValidators: true } // Returns the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};
