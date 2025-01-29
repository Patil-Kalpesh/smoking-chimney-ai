import mongoose from 'mongoose';

const categoryModel = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const categorySchema= mongoose.models.categories || mongoose.model('categories', categoryModel);
