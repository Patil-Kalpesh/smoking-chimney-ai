import { connectToDatabase } from '@/utils/dbConnect'; // Create MongoDB connection helper (explained below)
import Category from '@/models/Category'; // We'll create this model next

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { category, description } = req.body;

      // Validate input
      if (!category || !description) {
        return res.status(400).json({ message: 'Category and description are required' });
      }

      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Create a new category in the database
      const newCategory = new Category({
        category,
        description,
      });

      await newCategory.save();

      return res.status(201).json({ message: 'Category created successfully' });
    } catch (error) {
      console.error('Error creating category:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
