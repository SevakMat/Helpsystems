import {useEffect,useState} from "react"
import {useDispatch} from "react-redux"

import {deleteItem,getList,addItem} from "../../service/service.js"

import AddCategories from "./AddCategories";

function Categories(){

  const dispach = useDispatch()
  const [categoriesList, setCategoriesList] = useState([])
  const [CategoriField , setCategoriField] = useState(false)
  
  useEffect(function(){
    const listFromDb = getList("categories")
    setCategoriesList(listFromDb)
  },[])


  function deletUserItem(item){
    let newList = deleteItem(item,"categories")
    setCategoriesList(newList)
  }

  function addFunction(e){
    dispach({
      type:"addCategory",
      payload:e
    })
    setCategoriField(!CategoriField)
    setCategoriesList(addItem({"categories":e},"categories"))
  }
  return(
    <div>
      {CategoriField && <AddCategories addFunction={addFunction} />}
      {!CategoriField && <div  className ="itemListArea"  style={{margin:"40px" , marginLeft:"300px" }}>
        <span style={{margin:"10px",marginLeft:"300px" }}>Categories</span >
        <span onClick={()=>{setCategoriField(true)}}> Add</span>
          {categoriesList.map((item)=>{
            return(
              <div className="alert-primary" style={{margin:"40px",padding:"10px"}}>
                <span>{item.categories}</span>
                <button className="btn btn-danger" style={{margin:"2px"}} onClick={()=>deletUserItem(item.id,"categories")}>Delete</button>
              </div>)
            })
          }
      </div>}
    </div>
    
  )
}

export default Categories
