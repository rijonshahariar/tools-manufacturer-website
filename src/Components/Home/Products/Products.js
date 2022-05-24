import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "./Product/Product";
import './Product/Product.css'
const Products = () => {
    const [products] = useProducts();
    const inStock = products.filter((product) => product.quantity > 0);

    return (

        <div className="mb-5">
            <h1 className="section-title text-center my-5 fw-bold">
                <span className="text-4xl d-inline-block">
                    FEATURED TOOLS
                </span>
            </h1>
            <div>
                {inStock.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>

        </div>

    );
};

export default Products;
