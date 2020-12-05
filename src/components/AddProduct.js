import React, { useState} from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";

import { addProduct } from "../actions/productActions";

// react-router-dom
import { useHistory } from 'react-router-dom';


const AddProduct = () => {

  const categories = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();
  //const products = useSelector(state => state.productReducer);

  const [productName, setProductName] = useState("");
  const [categ, setCateg] = useState(0);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState(0);

  const history = useHistory()

 

  return (
    <div className="container mt-3">
      <h3 className="text-center">Add product</h3>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            onChange={e => setCateg(e.target.value)}
          >
            <option>Choose</option>
            {categories.map(category => (
              <option value={category.id} key={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Unit Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Quantity Per Unit</label>
          <input
            type="text"
            className="form-control"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Units In Stock</label>
          <input
            type="text"
            className="form-control"
            value={stock}
            onChange={ e => setStock(e.target.value)}
          />
        </div>
        <button
          onClick={ e => {
            e.preventDefault()         
            dispatch(addProduct(productName, categ, quantity, price, stock))
            history.goBack()
          }}
          className="btn btn-success"
        >
          Add
        </button>

      </form>
    </div>
  );
};

export default AddProduct;
