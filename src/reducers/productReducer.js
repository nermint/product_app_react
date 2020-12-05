

const productReducer =(state = [], action)=>{
  switch(action.type){
    case 'GET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: state.length+2+1,
          categoryId: parseInt(action.payload.categoryId,10),
          productName: action.payload.productName,
          quantityPerUnit: action.payload.quantityPerUnit,
          unitPrice: action.payload.unitPrice,
          unitsInStock: parseInt(action.payload.unitsInStock,10)
        }
      ];

    case 'GET_UPDATED_PRODUCT':
      return [ ...state.filter( product =>  product.id === action.payload ) ]
      
    case 'UPDATE_PRODUCT':
      return [...state.splice(state.indexOf(action.payload.prevProduct), 1, action.payload.newProduct)]

    default:
      return state;
  }
}

export default productReducer;