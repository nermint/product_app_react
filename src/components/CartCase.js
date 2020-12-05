import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { removeFromCart } from '../actions/cartActions';

// react-router-dom
import { Link } from 'react-router-dom';

// alert
import alertify from "alertifyjs";

const CartCase = () =>{

  // css style
  const cartStyle = {
    minWidth: "300px"
  }


  const addedProducts = useSelector (state => state.cartReducer);

  const dispatch =useDispatch();

  const emptyCart =() =>{
    return(
    <div className="text-light">Your cart is empty</div>
    )
  }

  const loadedCart =()=>{
    return(
      <div className="dropdown show">
      <a  className="dropdown-toggle text-light" href={ ()=>false } role="button" id="dropdownMenuLink" data-toggle="dropdown">
        Your cart
      </a>
    <div style={cartStyle} className="dropdown-menu dropdown-menu-right p-2">
      { addedProducts.map( added =>(
       <div>
          <span className="badge badge-danger" onClick={
              () => {dispatch(removeFromCart(added.product.id))
                alertify.error(added.product.productName + " removed from cart");
              }
          }>x</span> 
          {" "}
          {added.product.productName}
          {" "}
          <span className="badge badge-primary">{added.quantity}</span > 
      </div>
      ) ) }
     <div class="dropdown-divider"></div>
     <Link className="text-primary" to="/cart" >Go to cart</Link>
    </div>
  </div>
    )
  }

  return(
    <div>
      { addedProducts.length > 0 ? loadedCart() : emptyCart()}
      </div>
  )
}

export default CartCase;
