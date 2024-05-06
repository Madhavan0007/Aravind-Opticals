import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://localhost:3001/products');
                if(!response.ok){
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
            }catch(err){
                setIsError(err.message);
            }finally{
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [] );

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    if(isLoading){
        return <div className='full-page'>Loading....</div>
    }

    if(error){
        return <div className='full-page'>Error: {error}</div>
    }

    return (
        <div className="container">
            <div className='products'>
                {products.map(product => (
                    <Link key={product.Product_id} to={`/product/${product.Product_id}`} className='product-link'>
                        <Card product={product} />
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default Shop;