import {useRef} from "react"

function AddUsers({addFunction}) {

    const nameRef = useRef()
    const lastNameRef = useRef()
    const ageRef = useRef()

    function addUser(){
        let obj = {
        ["name"]:nameRef.current.value,
        ["lastName"]:lastNameRef.current.value,
        ["age"]:ageRef.current.value
        }
        addFunction(obj)
    }
  return(
    <div className="regForm">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div className="form-group ">
                    <label >name</label>
                    <input 
                        ref={nameRef}
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label >Last name</label>
                    <input
                        ref={lastNameRef} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label >age</label>
                    <input type="number" 
                        ref={ageRef}
                        className="form-control" 
                    />
                </div>
                <button 
                    type="submit" 
                    onClick={()=>{addUser()}}
                >
                    ADD
                </button>
        </div>
    </div>
    )
}

export default AddUsers
// "id":1,
// "name": "Sevak",
// "lastName":"Matevosyan",
// "age":"22"