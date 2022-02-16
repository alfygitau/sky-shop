import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/Actions/cartActions";
import "./productCard.css";

const ProductCard = ({ id, title, image, category, price, rating }) => {

const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart =()=>{
    dispatch(addToCart());
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="badge badge-info">{rating.rate}</span>
        <img
          src={image}
          alt="products"
          onClick={() => navigate(`/productdetails/${id}`)}
        />
      </div>
      <p>{title}</p>
      <p>{category}</p>
      <span>$ {price}</span>
      <button type="button" className="btn btn-outline-info" onClick={handleAddToCart} >
        BUY NOW
      </button>
    </div>
  );
};

export default ProductCard;
