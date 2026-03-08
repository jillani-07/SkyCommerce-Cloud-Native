// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for Health Check (DevOps monitoring mein kaam aayega)
app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy');
});

// Product Schema (Real-world structure)
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
    imageUrl: String
});

const Product = mongoose.model('Product', productSchema);

// API to get products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexcommerce';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
    })
    .catch(err => console.log("DB Connection Error:", err));

