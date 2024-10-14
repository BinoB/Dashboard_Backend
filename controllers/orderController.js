import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

// Fetch all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order (for adding sample data)
export const createOrder = async (req, res) => {
  const {
    invoiceNo,
    orderTime,
    customerName,
    customerEmail,
    customerPhone,
    paymentMethod,
    amount,
    status,
  } = req.body;

  const newOrder = new Order({
    invoiceNo,
    orderTime,
    customerName,
    paymentMethod,
    customerEmail,
    customerPhone,
    amount,
    status,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
