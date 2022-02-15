import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { product_id } = useParams();

  const fetchSingleProduct = async (product_id) => {
    await axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then((response) => {
        console.log(response.data);
        const product = response.data;
        setProduct(product);
      });
  };
  useEffect(() => {
    fetchSingleProduct(product_id);
  }, [product_id]);

  return (
    <div className="product-description">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="other-details">
        <h5>{product.title}</h5>
        <h6>Category: {product.category}</h6>
        <span className="price">Price: $ {product.price}</span>
        <p>Description: {product.description}</p>
        <button type="button" class="btn btn-outline-info">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
