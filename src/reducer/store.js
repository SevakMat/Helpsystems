import {createStore} from "redux"

const store = createStore (function(state,action){
  if(action.type ==="changeItemList"){
    console.log("chishta");
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
  registration:{
    isRegistrationOpen:false
  }
})
export default store;