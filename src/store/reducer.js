import {combineReducers} from "redux"
const initialState={};
const storeReducer=(state=initialState,action)=>{
    switch(action.type){

    case "INCREASE":
        let increasedItem=state[action.payload];
        increasedItem++;
      return {...state,[action.payload]:increasedItem}  

    case "PUT_CART":
        return {...state,[action.payload]:0}

    case "DECREASE":
      let decreasedItem=state[action.payload];
       decreasedItem--
    return {...state,[action.payload]:decreasedItem} 
    
    default:
        return state;
}
}

const reducer=combineReducers({store:storeReducer})
export default reducer;