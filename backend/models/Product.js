const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: String,
    stock: { type: Number, default: 0, min: 0 }, // Stock minus mein nahi jana chahiye
    imageUrl: { type: String, required: true },
    rating: { type: Number, default: 0 }
}, { 
    timestamps: true // Isse "CreatedAt" aur "UpdatedAt" automatic add ho jayega
});

module.exports = mongoose.model('Product', productSchema);
