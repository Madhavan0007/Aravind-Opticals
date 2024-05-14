import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
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

    const filteredProducts = searchQuery.trim() === '' ? products : products.filter(product => {
    const searchString = searchQuery.toLowerCase();
    return (
        product.Category.toLowerCase().includes(searchString) ||
        (product.Frame_color && product.Frame_color.toLowerCase().includes(searchString)) ||
        product.Brand_name.toLowerCase().includes(searchString)
    );
    });

    if(isLoading){
        return <div className='full-page'>Loading....</div>
    }

    if(error){
        return <div className='full-page'>Error: {error}</div>
    }

    return (
        <div className="container">
            <div className="search-container">
                <div className="search-field">
                    <input
                    type="text"
                    placeholder="Search by category or color or brand"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{border: 'none', width: '100%'}}
                    />
                </div>
                <div className="product-count">{filteredProducts.length} Products</div>
            </div>
            <div className='products'>
                {
                    searchQuery && filteredProducts.length === 0 ? (
                        <p className='full-page'>No products found</p>
                    ) : (
                    filteredProducts.map(product => (
                        <Link key={product.Product_id} to={`/product/${product.Product_id}`} className='product-link'>
                            <Card product={product} />
                        </Link>
                )))}
            </div>
        </div>
  )
}

export default Shop;