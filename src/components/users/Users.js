import {useEffect,useState} from "react"

import AddUsers from "./AddUsers"

// import getList from "../../service/service.js"
import {deleteItem,getList,addItem} from "../../service/service.js"

function Users(){

  const [usersList, setUsersList] = useState([])
  const [usersField, setUsersField] = useState(false)

  useEffect(function(){
    const listFromDb = getList("users")
    setUsersList(listFromDb)
  },[])


  function deletUserItem(item){
    let newList = deleteItem(item,"users")
    setUsersList(newList)
  }

  function addFunction(e){
    setUsersField(!usersField)
    console.log(e);
    setUsersList(addItem(e,"users"))
  }
  return(
    <div>
      {usersField && <AddUsers addFunction={addFunction} />}
    {!usersField && <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
        <span style={{margin:"10px",marginLeft:"300px" }}>Users</span >
        <span onClick={()=>{setUsersField(true)}} >Add</span>
          {usersList.map((item)=>{
            return(
              <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
                <span>{item.name + " "}</span>
                <span>{item.lastName + " "}</span>
                <span>{item.age + " "}</span>
                <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deletUserItem(item.id,"users")}>Delete</button>
              </div>)
            })
          }
      </div>}
    </div>
    
  )
}

export default Users
