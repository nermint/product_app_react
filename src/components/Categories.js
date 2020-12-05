import React, { useEffect } from "react";

// react-redux
import { useDispatch, useSelector } from 'react-redux';

// actions
import * as categoryActions from '../actions/categoryActions';
import * as productActions from '../actions/productActions';

const Categories = () => {
  const categories = useSelector( state => state.categoryReducer);

  const dispatch = useDispatch();
  
  useEffect(() => {
    categoryActions.getCategoriesFunc(dispatch);
  },[dispatch]);


  return (
    <div>
      <h2><span className="badge badge-warning mt-4">Categories</span></h2>
    <table className="table table-bordered ">
      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
           <td onClick={ () => {
             productActions.getProductsFunc(dispatch,category.id)
             dispatch(categoryActions.currentCategory(category.categoryName))
            }
          }> { category.categoryName }</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Categories;
