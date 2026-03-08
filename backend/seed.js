const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexcommerce';

const sampleProducts = [
  {
    name: "Cloud Native Hoodie",
    price: 45.99,
    description: "Premium cotton hoodie for DevOps Engineers.",
    category: "Apparel",
    stock: 50,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    name: "Docker Mastery Mug",
    price: 15.00,
    description: "Start your morning with containerized coffee.",
    category: "Accessories",
    stock: 100,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    name: "Kubernetes Guide Book",
    price: 32.50,
    description: "The ultimate guide to orchestrating your life.",
    category: "Books",
    stock: 20,
    imageUrl: "https://via.placeholder.com/150"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await Product.deleteMany({}); // Purana data saaf karein
    await Product.insertMany(sampleProducts);
    console.log("Database Seeded Successfully! 🌱");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
