import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/cartContext";

const Cart = ()=>{
    const navigate = useNavigate();
    const {cartItems} = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
            <div className="cart">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                  <ul className="list-group mb-3">
                    {cartItems.map((item, index) => (
                      <li key={index} className="list-group-item">
                        <div className="row">
                          <div className="col-md-8">
                            <h5 className="mb-0">{item.name}</h5>
                            <p className="text-muted mb-0">Price: ${item.price}</p>
                          </div>
                          {/* You can add more details like quantity, image, etc. here */}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Total:</h5>
                    <h5 className="mb-0">${totalPrice.toFixed(2)}</h5>
                  </div>
                  <button className="btn btn-primary mt-3" onClick={()=>{navigate("/placeOrder")}}>Place Order</button>
                </div>
              )}
            </div>
          
    )

    }

export default Cart;