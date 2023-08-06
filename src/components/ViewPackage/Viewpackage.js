import axios from 'axios'
import React from 'react'
import './Viewpackage.css'
import { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


function Viewpackage() {
  const {name} = useParams()
  console.log(name);//here id is sotred in name variable.so we can give any variable name to store id.

  const [view,setView]=useState({})

  useEffect(()=>{
    axios.get(`http://localhost:4000/addpackage/viewsinglepackage/${name}`).then((response)=>{
      // console.log(response);
      setView(response.data.singledataview)
    })
  },[])

  return (
    <div>
      <Navbar className='navbar'/>
        <div className='container viewpackage-container'>
          <div className='row discover-row'>
            <div className='col-lg-12'>
            <h1 className='discover'><span className='discover-span'>DISCOVER</span><br/> <span className='world-span'>THE WORLD</span></h1>
            </div>

          </div>
            
          
           <div className='row viewpackage-row'>
            <div className='col-lg-3'>

            </div>
            <div className='col-lg-6 '>
            <div className="card first-card text-center">
              <img className='view-singleimage' src={`/assets/${view.image}`} alt="image of place" />
            </div>
            <div className="card-body first-cardbody singlepackageview">
                  <h3>Packagename:<span className='h-span'>{view.packagename}</span></h3>
                  <p>No of days:<span>{view.days}</span></p>
                  <p>Hotelname:<span>{view.hotelname}</span></p>
                  <p>Type of food:<span>{view.food}</span></p>
                  <p>Description about place:<span>{view.description}</span></p>
                  <p>Price per person:<span>{view.price}</span></p>
                  <div className=' booking-buttondiv'>
                    <input type="button" value='booknow' className='btn booking-button' />

                  </div>
                </div>

            </div>

           </div>


        </div>
      
    </div>
  )
}

export default Viewpackage
