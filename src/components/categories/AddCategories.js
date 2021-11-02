import {useRef} from "react"
function AddCategories({addFunction}) {

  const categoryInput = useRef()

  return(
    <div className="regForm">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div className="form-group ">
                    <label >select category</label>
                    <input 
                        ref={categoryInput}
                        className="form-control" 
                    />
                </div>
                <button 
                    className="btn btn-primary"
                    onClick={()=>{addFunction(categoryInput.current.value)}}
                >
                    ADD
                </button>
        </div>
    </div>
    )
}

export default AddCategories