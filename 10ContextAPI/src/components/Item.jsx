import React from "react";
import { useCart } from "../context/Cart";
import '../App.css'

const Item = (props) =>{
    const cart = useCart()
    console.log("Cart",cart)
    return(
        <div className="item-container">
            <div className="item-card">
                <h4>{props.name}</h4>
                <p>Price: ${props.price}</p>
                <button onClick={()=> cart.setItems([...cart.items,{name: props.name,price: props.price},])}>+</button>
            </div>
        </div>
    )
}
export default Item;