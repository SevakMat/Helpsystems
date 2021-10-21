import {useState} from "react"

import ItemList from "./ItemList"
import RegistrationForm from "./Registration"

import "../styles/sty.css"


import getCategoriList from "../service/service.js"

function Home() {
  const[itemList,setItemList]= useState([])

  function onSelect(e){
    setItemList(getCategoriList(e.target.innerText))
  }
  return (
    <div  className="customers">
      {true && <RegistrationForm/>}
      <tr>
        <th onClick={onSelect}>people</th>
        <th onClick={onSelect}>items</th>
        <th onClick={onSelect}>categories</th>
      </tr>
      <ItemList itemList={itemList} />
    </div>
  );
}

export default Home;
