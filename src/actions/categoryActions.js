
// json data
import jsonFile from "../jsonData/db.json";

export const getCategories = (categories)=>{
  return{
    type: 'GET_CATEGORIES',
    payload: categories
  }
}

export const getCategoriesFunc = (dispatch) => {
  dispatch(getCategories(jsonFile.categories));
};


export const currentCategory = (categoryName) =>{
    return{
      type: 'GET_CATEGORY_NAME',
      payload:categoryName
    }
}


