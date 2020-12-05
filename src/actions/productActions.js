// json data
import jsonFile from "../jsonData/db.json";

export const getProducts = products => {
  return {
    type: "GET_PRODUCTS",
    payload: products
  };
};

export const getProductsFunc = (dispatch,categoryId) => {

  let data;
  if(categoryId){
    data=jsonFile.products.filter( product => product.categoryId === categoryId );
  }else{
    data = jsonFile.products;
  }
  dispatch(getProducts(data));
};

export const addProduct = (productName,categ,quantity,price,stock) => {
    return {
      type: 'ADD_PRODUCT',
      payload: {
        productName:productName,
        categoryId:categ,
        quantityPerUnit:quantity,
        unitPrice:price,
        unitsInStock:stock
      }
    }
}

export const getupdateProduct = ( matchId ) => {
  return {
    type: 'GET_UPDATED_PRODUCT',
    payload: matchId
  }
}


export const updateProduct = ( prevProduct, newProduct ,proId ) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: {
      prevProduct: prevProduct,
      newProduct: newProduct,
      proId: proId
    }
  }
}




