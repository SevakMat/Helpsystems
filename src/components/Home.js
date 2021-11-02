import {useState} from "react"

import Users from "./users/Users"
import Categories from "./categories/Categories"
import Items from "./items/Items"

import "../styles/sty.css"


function Home() {
  const[isUsers,setisUsers]= useState(false)
  const[isCategories,setisCategories]= useState(false)
  const[isItems,setisItems]= useState(false)

  function onSelect(e){
    switch(e.target.innerText){
      case("users"):
        setisUsers(true)
        setisCategories(false)
        setisItems(false)
        return
      case("items"):
        setisUsers(false)
        setisCategories(false)
        setisItems(true)
        return
      case("categories"):
        setisUsers(false)
        setisCategories(true)
        setisItems(false)
        return
    }
    
  }
  
  return (
    <div  className="customers">
      <tr style={{cursor: "pointer"}}>
        <th onClick={onSelect}>users</th>
        <th onClick={onSelect}>items</th>
        <th onClick={onSelect}>categories</th>
      </tr>
      {isUsers && <Users/>}
      {isCategories && <Categories/>}
      {isItems && <Items/>}
    </div>
  );
}

export default Home;
