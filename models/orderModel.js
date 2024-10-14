import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    invoiceNo: { type: String, required: true },
    orderTime: { type: Date, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true }, 
    customerPhone: { type: String, required: true }, 
    paymentMethod: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
