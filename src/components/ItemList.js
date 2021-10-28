import "../styles/sty.css"

import {useEffect, useState} from "react"
import RegistrationForm from "./Registration"
import{useSelector,useDispatch} from "react-redux"
import {deleteItem} from "../service/service"

import getCategoriList from "../service/service.js"

function ItemList({selectItem}){
  console.log(selectItem,"ssss");
  const dispach = useDispatch()

  const selectedList = useSelector(function(state){
    return state.itemList.items
    })
  const test2 = useSelector(function(state){
    return state.registration.isRegistrationOpen
    })

  function openChangeArea(e){
    dispach({
      type:"changeIsRegistrationOpen",
      payload:true
    })
  }

  useEffect(function(){
    const itemList = getCategoriList(selectItem)
    dispach({
      type:"changeItemList",
      payload:itemList
    })
  },[selectItem])

  function deleteItemInComponent(e){
    let arr =deleteItem(e,selectItem)
    dispach({
      type:"changeItemList",
      payload:arr
    })
  }

  return(
        <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
          {test2 && <RegistrationForm/>}
          <button className="btn btn-success" style={{margin:"10px",marginLeft:"550px"}} onClick={openChangeArea}>Add item</button>
          <h2 style={{margin:"10px",marginLeft:"300px" }}>{selectItem}</h2 >
            {selectedList.map((item)=>{
              return(
                <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
                  <span>{item.name}</span>
                  <span>{item.lastName}</span>
                  <span>{item.age}</span>
                  <button className="btn btn-success" style={{margin:"2px"}} onClick={()=>openChangeArea(item.id)}>read</button>
                  <button className="btn btn-success" style={{margin:"2px"}}  onClick={()=>openChangeArea(item.id)}>edit</button>
                  <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deleteItemInComponent(item.id)}>Delete</button>
                </div>)
              })
            }
        </div>
      )
}

export default ItemList

//add
//delete
//read
//edit
