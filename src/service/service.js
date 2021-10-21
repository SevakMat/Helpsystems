import {List} from "../db/db.js"

function copyList(arr){
  var newArr = JSON.parse(JSON.stringify(arr));
  return newArr
}

export default function getCategoriList (item){
  switch(item){
    case "people":
      return copyList(List).peopleList   
    case "items":
      return copyList(List).itemList  
    case "categories":
      return copyList(List).categoriseList
    default:
      return 305  
  }
}

