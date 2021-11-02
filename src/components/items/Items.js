import {useEffect,useState} from "react"

import AddItems from "./AddItems"

// import getList from "../../service/service.js"
import {deleteItem,getList} from "../../service/service.js"

function Items(){

  const [itemsList, setItemsList] = useState([])

  useEffect(function(){
    const listFromDb = getList("items")
    setItemsList(listFromDb)
  },[])


  function deletUserItem(item){
    let newList = deleteItem(item,"items")
    setItemsList(newList)
  }

  return(
    <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
    <h2 style={{margin:"10px",marginLeft:"300px" }}>Items</h2 >
      {itemsList.map((item)=>{
        return(
          <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
            <span>{item.name + " "}</span>
            <span>{item.price + " "}</span>
            <span>{item.term}</span>
            <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deletUserItem(item.id,"items")}>Delete</button>
          </div>)
        })
      }
  </div>
    
  )
}

export default Items
