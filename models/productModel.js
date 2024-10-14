import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true }, // PRODUCT NAME
    category: { type: String, required: true },    // CATEGORY
    price: { type: Number, required: true },       // PRICE
    salePrice: { type: Number, required: false },  // SALE PRICE (optional)
    stock: { type: Number, required: true },       // STOCK
    status: { type: String, required: true, enum: ['Available', 'Out of Stock'] }, // STATUS
    published: { type: Boolean, default: true }    // PUBLISHED (Boolean indicating if the product is published)
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);
export default Product;
