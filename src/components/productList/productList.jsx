import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../other files/ProductCard/productCard";
import "./productList.css";
import { Checkbox } from "rsuite";
import { FlexboxGrid } from "rsuite";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState(null);
  const [checked, setChecked] = useState(false);

  const fetchProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      const fetchedproducts = response.data;
      setProducts(fetchedproducts);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredElectronics = products.filter((product) => {
    return product.category === "electronics";
  });
  const filteredJewelery = products.filter((product) => {
    return product.category === "jewelery";
  });
  const filteredMenClothing = products.filter((product) => {
    return product.category === `men's clothing`;
  });
  const filteredWomenClothing = products.filter((product) => {
    return product.category === `women's clothing`;
  });

  useEffect(() => {
    setfilteredProducts(products);
  }, [products]);

  function showA() {
    setfilteredProducts(products);
    setChecked(true);
  }
  function showB() {
    setfilteredProducts(filteredElectronics);
    setChecked(true);
  }
  function showC() {
    setfilteredProducts(filteredJewelery);
    setChecked(true);
  }
  function showD() {
    setfilteredProducts(filteredMenClothing);
    setChecked(true);
  }
  function showE() {
    setfilteredProducts(filteredWomenClothing);
    setChecked(true);
  }

  return (
    <div className="show-grid">
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={4}>
          <div className="categories">
            <h6>Search Filter</h6>
            <Checkbox className="checkbox" checked={checked} onClick={showA}>
              All Products
            </Checkbox>
            <Checkbox className="checkbox" checked={checked} onClick={showB}>
              Electronics
            </Checkbox>
            <Checkbox className="checkbox" checked={checked} onClick={showC}>
              Jewelery
            </Checkbox>
            <Checkbox className="checkbox" checked={checked} onClick={showD}>
              Men's Clothing
            </Checkbox>
            <Checkbox className="checkbox" checked={checked} onClick={showE}>
              Women's Clothing
            </Checkbox>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={4}>
          <div className="products-container">
            {filteredProducts?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  id={product.id}
                  rating={product.rating}
                />
              );
            })}
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default ProductList;
