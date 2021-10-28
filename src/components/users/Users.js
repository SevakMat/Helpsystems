import {useEffect,useState} from "react"

// import getList from "../../service/service.js"
import {deleteItem,getList} from "../../service/service.js"

function Users(){

  const [usersList, setUsersList] = useState([])

  useEffect(function(){
    const listFromDb = getList("users")
    console.log(listFromDb,"2222");
    setUsersList(listFromDb)
  },[])

  return(
    <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
    <h2 style={{margin:"10px",marginLeft:"300px" }}>Users</h2 >
      {usersList.map((item)=>{
        return(
          <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
            <span>{item.name}</span>
            <span>{item.lastName}</span>
            <span>{item.age}</span>
            <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deleteItem(item.id,"users")}>Delete</button>
          </div>)
        })
      }
  </div>
    
  )
}

export default Users
