export const addProductsToCart = products => {
  return {
    type: "ADD_TO_CART",
    payload: products
  };
};

export const removeFromCart = productId => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId
  };
};