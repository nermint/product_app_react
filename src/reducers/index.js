import { combineReducers } from 'redux';

import currentCategoryReducer from './currentCategoryReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  currentCategoryReducer:currentCategoryReducer,
  productReducer:productReducer,
  categoryReducer: categoryReducer,
  cartReducer: cartReducer
});



export default rootReducer;