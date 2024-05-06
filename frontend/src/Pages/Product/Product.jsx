import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './Product.css';

const Product = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/product/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch(err){
                setIsError(err.message);
            }finally{
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    if(isLoading){
        return <div className='full-page'>Loading....</div>
    }

    if (error) {
        return (
            <div class="not-found">
                <p className='apology'>Oops &#128546;, Product not found!</p>   
                <Link to='/products' className='link-style'>
                    <p className='link'>Want to explore More</p>
                </Link>
            </div>
        );
    }
    
    
      return (
        <div className="product-container">
            <div className="product-image">
                <img src={`/products/${product.Image}`} alt={product.Brand_name} />
            </div>
            <div className="product-details">
                <h2 className='brand'>{product.Brand_name}</h2>
                <p className='price'>{product.Price}</p>
                <div className="info-category">
                    <p className='product-title'>Category :</p>
                    <p className='product-def'>{product.Category}</p>
                </div>
                {product.Category === 'Sunglass' && (
                <div className='information'>
                    <div className="info-details">
                        <p className='product-title'>Frame Shape</p>
                        <p className='product-def'>{product.Frame_shape}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Type</p>
                        <p className='product-def'>{product.Frame_type}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Size</p>
                        <p className='product-def'>{product.Frame_size}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Width</p> 
                        <p className='product-def'>{product.Frame_width}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Color</p> 
                        <p className='product-def'>{product.Frame_color}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Glass Color</p> 
                        <p className='product-def'>{product.Glass_color}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Gender</p> 
                        <p className='product-def'>{product.Gender}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Material</p> 
                        <p className='product-def'>{product.Material}</p>
                    </div>
                    
                </div>
                )}
                {product.Category === 'Contact lens' && (
                <div className='information'>
                    <div className="info-details">
                        <p className='product-title'>Base Curve</p> 
                        <p className='product-def'>{product.Base_curve}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Lens Diameter</p> 
                        <p className='product-def'>{product.Lens_diameter}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Lens Color</p> 
                        <p className='product-def'>{product.Lens_color}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Material</p> 
                        <p className='product-def'>{product.Material}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Water Content</p> 
                        <p className='product-def'>{product.Water_content}</p>
                    </div>
                </div>
                )}
                {product.Category === 'Eyeglass' && (
                <div className='information'>
                    <div className="info-details">
                        <p className='product-title'>Frame Shape</p> 
                        <p className='product-def'>{product.Frame_shape}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Type</p> 
                        <p className='product-def'>{product.Frame_type}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Size</p> 
                        <p className='product-def'>{product.Frame_size}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Width</p> 
                        <p className='product-def'>{product.Frame_width}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Frame Color</p> 
                        <p className='product-def'>{product.Frame_color}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Gender</p> 
                        <p className='product-def'>{product.Gender}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Material</p> 
                        <p className='product-def'>{product.Material}</p>
                    </div>
                    <div className="info-details">
                        <p className='product-title'>Prescription Type</p>  
                        <p className='product-def'>{product.Prescription_type}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
    }



export default Product