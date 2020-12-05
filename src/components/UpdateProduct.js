import React, { useEffect , useState } from 'react';

// react-redux
import { useSelector, useDispatch } from "react-redux";

//actions
import { getCategoriesFunc } from '../actions/categoryActions';
import { updateProduct } from '../actions/productActions';

const UpdateProduct = ({ match }) =>{

   const products = useSelector(state => state.productReducer);
   const categories = useSelector( state => state.categoryReducer);
   const dispatch = useDispatch();
  
   useEffect(() => {
     getCategoriesFunc(dispatch);
     //console.log(prevProduct);
     console.log(products);
   },[]);


  const [productName, setProductName] = useState("");
  const [categ, setCateg] = useState(0);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState(0);

  const prevProduct = products;
  
  const newProduct = 
  {
    id: parseInt(match.params.id,10),
    categoryId: categ,
    productName: productName,
    quantityPerUnit: quantity,
    unitPrice: price,
    unitsInStock: stock
  };


  return(
    <div className="container mt-3">
      <h3 className="text-center">Update product</h3>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text" 
            className="form-control"
            defaultValue={ prevProduct[0].productName }
            //value={productName}
            onChange={e => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            onChange={e => setCateg(e.target.value)}
          >
            { categories.map( category =>(
              <option value={category.id} key={category.id}> 
              { category.categoryName }
             </option>
            ) ) }
            
          </select>
        </div>
        <div className="form-group">
          <label>Unit Price</label>
          <input
            type="text"
            className="form-control"
            defaultValue={ prevProduct[0].unitPrice }
            //value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Quantity Per Unit</label>
          <input
            type="text"
            className="form-control"
            defaultValue={ prevProduct[0].quantityPerUnit }
            //value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Units In Stock</label>
          <input
            type="text"
            className="form-control"
            defaultValue={ prevProduct[0].unitsInStock }
            //value={stock}
            onChange={ e => setStock(e.target.value)}
          />
        </div>
        <button
          className="btn btn-success"
          onClick={ e => {
            e.preventDefault()         
            dispatch(updateProduct(prevProduct, newProduct, parseInt(match.params.id,10)))
          }}
        >
          Add
        </button>
        
      </form>
    </div>
    
)
}

export default UpdateProduct;


