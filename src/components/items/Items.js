import {useEffect,useState} from "react"

// import getList from "../../service/service.js"
import {deleteItem,getList} from "../../service/service.js"

function Items(){

  const [itemsList, setItemsList] = useState([])

  useEffect(function(){
    const listFromDb = getList("items")

    setItemsList(listFromDb)
  },[])

  return(
    <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
    <h2 style={{margin:"10px",marginLeft:"300px" }}>Items</h2 >
      {itemsList.map((item)=>{
        return(
          <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
            <span>{item.name}</span>
            <span>{item.lastName}</span>
            <span>{item.age}</span>
            <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deleteItem(item.id,"items")}>Delete</button>
          </div>)
        })
      }
  </div>
    
  )
}

export default Items
