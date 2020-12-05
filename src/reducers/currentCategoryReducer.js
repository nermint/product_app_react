

const currentCategoryReducer =(state = "", action)=>{
  switch(action.type){
    case 'GET_CATEGORY_NAME':
      return action.payload;
    default:
      return state;
  }
}

export default currentCategoryReducer;