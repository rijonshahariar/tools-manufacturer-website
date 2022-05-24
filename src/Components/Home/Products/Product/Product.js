import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'
const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleInventory = () => {
        navigate(`/update/${product._id}`);
        localStorage.setItem(product._id, product.quantity, product.email);
        localStorage.setItem(`sold${product._id}`, parseInt(product.sold));
    };
    return (

        <div className="container py-2">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <ul className="list-group shadow">
                        <li className="list-group-item">
                            <div className="d-flex align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">{product.name}</h5>
                                    <p className="font-italic text-muted mb-0 small">{product.description}</p>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">Price: ${product.price}</h6>
                                        <h6 className="font-weight-bold my-2">Quantity: {product.quantity}</h6>
                                        <h6 className="font-weight-bold my-2">Min-Order: {product.min_order}</h6>
                                    </div>
                                    <button onClick={handleInventory} className=" btn btn-sm btn-primary">
                                        <i className="bi bi-cart"></i>  Buy Now
                                    </button>
                                </div><img src={product.img} alt="" width="200" className="mx-auto order-1 order-lg-2" />
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Product;
