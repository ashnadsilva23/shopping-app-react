import React, { useEffect, useState } from 'react'
import Navabar from './Navabar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] =useState([])

    const fetchData=()=>{
        axios.get(" https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)

            }
        ).catch().finally()
       
    }
    useEffect(()=>fetchData(),[])
    return (
        <div>
            <Navabar/><br></br>
            <div className="container">
                <h1 align="center"><u>View Product</u></h1><br></br><br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img height="300px" width="300px" src={value.image} className="card-img-top" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.id}</h5>
                                                <p className="card-text">{value.title}</p>
                                                <p className="card-text">{value.price}</p>
                                                <p className="card-text">{value.rating.rate}</p>
                                                <p className="card-text">{value.rating.count}</p>







                                                <a href="#" className="btn btn-primary">view More</a>
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

export default ViewAll