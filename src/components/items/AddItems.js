function AddItems(props) {

    function myFunction(e){
        console.log(e);
    }


  return(
    <div className="regForm">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={myFunction} >
                <div className="form-group ">
                    <label >name</label>
                    <input 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label >Last name</label>
                    <input type="password" 
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label >age</label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="form-group">
                    <label >gmail</label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
    )
}

export default AddItems