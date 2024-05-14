import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css';
const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState({
    Product_id: '',
    Image: '',
    Price: '₹',
    Brand_name: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setProduct({ ...product, Category: selectedCategory });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(product);
      await axios.post('https://aravind-opticals.onrender.com/add-product', product);
      alert('Product added successfully');
      setIsSubmitted(true);
      // Clear form or redirect user
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error
    }
    console.log('Product submitted:', product);
  };

  const categoryOptions = [
    { value: 'Sunglass', label: 'Sunglasses' },
    { value: 'Eyeglass', label: 'Eyeglasses' },
    { value: 'Contact lens', label: 'Contact Lenses' }
  ];

  const frameTypeOptions = ['Full rim', 'Half rim', 'Rimless'];
  const genderOptions = ['Unisex', 'Men', 'Women'];
  const renderCategoryInputs = () => {
    switch (category) {
      case 'Sunglass':
        return (
          <>
            <div>
              <label>Frame Shape:</label>
              <input type="text" name="Frame_shape" value={product.Frame_shape || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Frame Type:</label>
              <select  className="select-container" name="Frame_type" value={product.Frame_type} onChange={handleChange} required>
                <option value="">Select Frame Type</option>
                {frameTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
                <label>Frame Size:</label>
                <input type="text" name="Frame_size" value={product.Frame_size || ''} onChange={handleChange} required/>
            </div>
            <div>
                <label>Frame Width:</label>
                <input type="text" name="Frame_width" value={product.Frame_width || ''} onChange={handleChange} required/>
            </div>
            <div>
                <label>Frame Color:</label>
                <input type="text" name="Frame_color" value={product.Frame_color || ''} onChange={handleChange} required/>
            </div>
            <div>
                <label>Glass Color:</label>
                <input type="text" name="Glass_color" value={product.Glass_color || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Gender:</label>
              <select className="select-container" name="Gender" value={product.Gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                {genderOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
            <label>Material:</label>
                <input type="text" name="Material" value={product.Material || ''} onChange={handleChange} required/>
            </div>
          </>
        );
      case 'Eyeglass':
        return (
          <>
            <div>
              <label>Frame Shape:</label>
              <input type="text" name="Frame_shape" value={product.Frame_shape || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Frame Type:</label>
              <select className="select-container" name="Frame_type" value={product.Frame_type} onChange={handleChange} required>
                <option value="">Select Frame Type</option>
                {frameTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
                <label>Frame Size:</label>
                <input type="text" name="Frame_size" value={product.Frame_size || ''} onChange={handleChange} required/>
            </div>
            <div>
                <label>Frame Width:</label>
                <input type="text" name="Frame_width" value={product.Frame_width || ''} onChange={handleChange} required/>
            </div>
            <div>
                <label>Frame Color:</label>
                <input type="text" name="Frame_color" value={product.Frame_color || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Gender:</label>
              <select className="select-container" name="Gender" value={product.Gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                {genderOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
            <label>Material:</label>
                <input type="text" name="Material" value={product.Material || ''} onChange={handleChange} required/>
            </div>
            <div>
            <label>Prescription Type:</label>
                <input type="text" name="Prescription_type" value={product.Prescription_type || ''} onChange={handleChange} required/>
            </div>

          </>
        );
      case 'Contact lens':
        return (
          <>
            <div>
              <label>Base Curve:</label>
              <input type="text" name="Base_curve" value={product.Base_curve || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Lens Diameter:</label>
              <input type="text" name="Lens_diameter" value={product.Lens_diameter || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Lens Color:</label>
              <input type="text" name="Lens_color" value={product.Lens_color || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Lens Material:</label>
              <input type="text" name="Material" value={product.Material || ''} onChange={handleChange} required/>
            </div>
            <div>
              <label>Water Content:</label>
              <input type="text" name="Water_content" value={product.Water_content || ''} onChange={handleChange} required/>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className='full-page' style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            <p>Successfully submitted</p>
            <Link style={{textDecoration: 'none'}} to='/products' className='nav-login'><button>View Products</button></Link> 
        </div>
      ) : (
        <div className="add-product-container">
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Product ID:</label>
              <input type="text" name="Product_id" value={product.Product_id} onChange={handleChange} required/>
            </div>
            <div>
              <label>Image URL:</label>
              <input type="text" name="Image" value={product.Image} onChange={handleChange} required/>
            </div>
            <div>
              <label>Price:</label>
              <input type="text" name="Price" value={product.Price} onChange={handleChange} required/>
            </div>
            <div>
              <label>Brand Name:</label>
              <input type="text" name="Brand_name" value={product.Brand_name} onChange={handleChange} required/>
            </div>
            <div>
              <label>Category:</label>
              <select className="select-container" name="Category" value={category} onChange={handleCategoryChange} required>
                <option value="">Select Category</option>
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {renderCategoryInputs()}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}  

export default AddProduct;
