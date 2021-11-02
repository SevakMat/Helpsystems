import {createStore} from "redux"

const store = createStore (function(state,action){
  if(action.type ==="addCategory"){
    console.log("action",action);
    return{
      ...state,
      itemList:{
        items:action.payload
      }
    }
  }
  if(action.type ==="changeIsRegistrationOpen"){
    return{
      ...state,
      registration:{
        isRegistrationOpen:action.payload
      }
    }
  }
  
  return state
},{
  itemList:{
    items:[],
  },

})
export default store;