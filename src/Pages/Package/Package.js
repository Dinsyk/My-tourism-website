import React, { useState } from "react";
import "./Package.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Package() {
  const [data, setData] = useState([]);
  // console.log(data);
  

  useEffect(() => {
    axios.get("http://localhost:4000/addpackage/view-package").then((data) => {
      console.log(data.data.data);

      setData(data.data.data);
    });
  }, []);
  // console.log(data);
  const navigate=useNavigate()
  const edit=(id)=>{
    navigate(`/edit-package/${id}`)

  }
  
  const delete_package=(id)=>{
    // console.log(id);
    axios.get(`http://localhost:4000/addpackage/delete-package/${id}`)
  }

  const view_package=(id)=>{
    console.log(id);
    navigate(`/viewpackage/${id}`)
  }

  

 
  return (
    <div>
       <div className='container nav-container'>
    <Navbar className='navv'/>

   </div>
      <div className="container package-container">
        <div className="row package-firstrow">
          <div className="col-lg-12">
            <h1 className="package-head">
              P<span className="package-headspan">ackages</span>
            </h1>
          </div>
        </div>
        <div className="row package-secondrow">
        {
            data.map((i) =>
          <div className="col-lg-4 mt-3">
          
            
            
              <div className="card first-card">
              <img src={`/assets/${i.image}`} alt="" />
            </div>
                <div className="card-body first-cardbody">
                  <h3>Packagename:{i.packagename}</h3>
                  <p>No of days:{i.days}</p>
                  <p>Hotelname:{i.hotelname}</p>
                  <p>Type of food:{i.food}</p>
                  <p>Description about place:{i.description}</p>
                  <p>Price per person:{i.price}</p>
                </div>
                <div className="card-buttons">
                    <input className="btn btn-warning" type="submit" value='edit'onClick={()=>{edit(i._id)}} />
                    <input className="btn btn-warning ms-2" type="submit" value='delete' onClick={()=>{delete_package(i._id)}} />
                    <input className="btn btn-warning ms-2" type="submit" value='view' onClick={()=>{view_package(i._id)}} />

                </div>
                
            
          </div> )
             }
        </div>
      </div>
    </div>
  );
}

export default Package;
