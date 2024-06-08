import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navabar from './Navabar'

const ViewProduct = () => {
    const [data, changeData] = useState(
 {
            "products":[]
            
          }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/products ").then(
            (response)=>
                {
                    changeData(response.data)
                }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])   
     return (
        <div>
            <Navabar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          {data.products.map(
                            (value,index)=>{
                                return   <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card">
                                    <img src={value.images} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.description}</h5>
                                        <p className="card-text">{value.id}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            }
                            
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct