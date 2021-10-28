import {List} from "../db/db.js"

function copyList(arr){

  var newArr = JSON.parse(JSON.stringify(arr));
  return newArr
}

export  function getList (item){
  console.log("delet");
  switch(item){
    case "users":
      return copyList(List).peopleList   
    case "items":
      return copyList(List).itemList  
    case "categories":
      return copyList(List).categoriseList
    default:
      return 305  
  }
}


export  function deleteItem(e,selectItem){
  
  switch(selectItem){
    case "users":
      let newArr = List.peopleList.filter((item)=>{
        return item.id !== e
      })
      console.log(newArr,"hesa");
      List.peopleList = newArr
      return  List.peopleList 

    case "items":
      let newArr1 = List.itemsList.filter((item)=>{
        return item.id !== e
      })
      List.itemList = newArr1
      return  List.itemList   

    case "categories":
      let newArr2 = List.categoriseList.filter((item)=>{
        return item.id !== e
      })
      List.categoriseList = newArr2
      return  List.categoriseList   
 
    default:
      console.log("problem in service js ");
      return []  
  }
}


export  function addItem(e,objItem){
  switch(objItem){
    case "users":
      let id = List.peopleList.length+1
      e[id] = id;
      List.peopleList.push(e)
      return List.peopleList
    case "items":
      let id1 = List.itemsList.length+1
      e[id] = id1;
      List.itemsList.push(e)   
      return  List.itemsList
    case "categories":
     let id2 = List.categoriseList.length+1
     e[id] = id2;
      List.categoriseList.push(e) 
      return List.categoriseList
    default:
      console.log("problem in service js ");
      return []  
  }
}

