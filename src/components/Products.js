import React, { useEffect } from "react";


import { useSelector, useDispatch } from 'react-redux';

// actions
import * as productActions from '../actions/productActions';
import { addProductsToCart } from '../actions/cartActions';

// alert
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

const Products = () => {
  //const [products, setProducts] = useState([]);

  const categoryName = useSelector(state => state.currentCategoryReducer);
  const products = useSelector( state => state.productReducer);
  

  const dispatch = useDispatch();

  useEffect(() => {
    productActions.getProductsFunc(dispatch);
    //console.log(products);
    
  },[dispatch]);


  // const getProducts = () => {
  //   setProducts(jsonFile.products);
  //   //console.log(jsonFile.products);
  // };


  return (
    <div>
      <h2><span className="badge badge-success mt-4 ">Products</span > <span className="badge badge-secondary">{ categoryName }</span></h2>
      <table className="table table-bordered  table-striped">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Product name</th>
            <th scope="col">Quanitity</th>
            <th scope="col">Units in stock</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { products.map( product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><Link to={`/update/${product.id}`} 
              onClick={() => dispatch(productActions.getupdateProduct(product.id))}
              >{product.productName}</Link></td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.unitPrice}</td>
              <td><button onClick={ () => {
                dispatch(addProductsToCart(product))
                alertify.success(product.productName + " added to cart");
              } } className="btn btn-primary">add</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
