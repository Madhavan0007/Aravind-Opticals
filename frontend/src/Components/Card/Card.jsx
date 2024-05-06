import React from 'react'
import './Card.css';

const Card = ({ product }) => {
    const getCategorySpecificInfo = () => {
        if (product.Category === 'Sunglass' || product.Category === 'Eyeglass') {
          return `${product.Gender} | ${product.Frame_color} | ${product.Category}`;
        } else if (product.Category === 'Contact lens') {
          return `${product.Lens_color} | ${product.Category}`;
        } else {
          return ''; // Handle other categories if needed
        }
      };

  return (
    <div className='card'>
        <div className="card__body">
            <img src={`/products/${product.Image}`} alt={product.Brand_name} className='card__image'/>
        </div>
        <div className="card__footer">
            <div className="card__title">
                {product.Brand_name}
            </div>
            <div className="card__description">
                <p>{getCategorySpecificInfo()}</p>
            </div>
            <div className="card__price">
                <p>{product.Price}</p>
            </div>
        </div>
        <div className="card__btn">
            <button>View Product</button>
        </div>
    </div>
  )
}

export default Card