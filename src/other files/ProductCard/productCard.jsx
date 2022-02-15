import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ id, title, image, category, price, rating }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image">
        <span class="badge badge-info">{rating.rate}</span>
        <img
          src={image}
          alt="products"
          onClick={() => navigate(`/productdetails/${id}`)}
        />
      </div>
      <p>{title}</p>
      <p>{category}</p>
      <span>$ {price}</span>
      <button type="button" class="btn btn-outline-info">
        BUY NOW
      </button>
    </div>
  );
};

export default ProductCard;
