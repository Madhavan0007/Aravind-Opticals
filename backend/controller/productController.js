const Product = require('../model/Product.js');
require('../server.js');

const insertProducts = async () => {
    try{
        const productsData = fs.readFileSync('../opticals.json');
        const products = JSON.parse(productsData);
    
        // Insert products into the database
        const insertedProducts = await Product.insertMany(products);
    
        console.log('Products inserted successfully:', insertedProducts);
      } catch (error) {
        // Handle any errors
        console.error('Error inserting products:', error);
      }
};

module.exports.fetchProducts =  async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findOne({ Product_id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.addProduct = async (req, res) => {
    try {
      const productData = req.body; // Get product data from request body
      const newProduct = new Product(productData); // Create new product instance
      await newProduct.save(); // Save product to database
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
    



