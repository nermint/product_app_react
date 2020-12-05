import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { removeFromCart } from '../actions/cartActions';

// alert
import alertify from "alertifyjs";

const Cart =() => {

  const addedProducts = useSelector (state => state.cartReducer);

  const dispatch =useDispatch();

  return(
      
      <div className="container mt-5">
        <table className="table">
        <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Quanitity</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

          { addedProducts.map( added =>(
            <tr>
                <td>{added.product.id}</td>
                <td>{added.product.productName}</td>
                <td>{added.product.unitPrice}</td>
                <td>{added.quantity}</td>
                <td><button className="btn btn-danger"
                onClick={
                  () =>{ dispatch(removeFromCart(added.product.id))
                    alertify.error(added.product.productName + " removed from cart");
                  }
                }
                >Remove</button></td>
            </tr>
            ) ) }

          </tbody>
        </table>
        </div>

   
  )

}

export default Cart;