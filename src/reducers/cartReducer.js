
const cartReducer =(state=[], action)=>{
  switch(action.type){
    case 'ADD_TO_CART':
      let addedProduct = state.find( p => p.product.id === action.payload.id );
      if(addedProduct){
        let newState = state.map(cartItem => {
          if(cartItem.product.id ===action.payload.id){
            return Object.assign({}, addedProduct, {
              quantity: addedProduct.quantity + 1
            });
          }
          return cartItem;
        });
          return newState;
      }
      else{
      return [ ...state,
        {
          product: action.payload,
          quantity:1,
      } ];
    }

    case 'REMOVE_FROM_CART':
      return [
        ...state.filter( p => p.product.id !== action.payload )
      ]
  
    default: 
      return state;
  }
}

export default cartReducer;