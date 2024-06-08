import React from 'react'
import Navabar from './Navabar'

const DeleteProduct = () => {
  return (
    <div>
        <Navabar/>
         <div className="container">
            <h1  align="center"><u>Delete Product</u></h1><br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                     
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Product Code</label>
                            <input type="text" className="form-control" />
                        </div>
                       
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct