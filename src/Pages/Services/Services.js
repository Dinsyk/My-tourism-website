import React from 'react'
import './Services.css'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'

function Services() {
  return (
    <>

<div className='container nav-container'>
          <Navbar/>

        </div>
    <div className='container service-container'>
      <div className='service-txt'>
        <h1 className='service-head'><span className='s-span'>S</span><span className='service-span'>ervices</span></h1>

      </div>

      <div className='row service-firstrow'>
        <div className='col-md-4'>
          <div className='card service-firstcard'>
            <i className='fas fa-hotel hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Affordable Hotel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

        <div className='col-md-4'>
          <div className='card service-firstcard'>
            <i className='fas fa-utensils hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Food&Drink</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

        <div className='col-md-4'>
          <div className='card service-firstcard'>
            <i className='fas fa-bullhorn hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Safety Guide</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

        <div className='col-md-4'>
          <div className='card service-firstcard mt-3'>
            <i className='fas fa-globe-asia hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Around The World</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

        <div className='col-md-4'>
          <div className='card service-firstcard mt-3'>
            <i className='fas fa-plane hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Fastest Travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

        <div className='col-md-4'>
          <div className='card service-firstcard mt-3'>
            <i className='fas fa-hiking hotel-icon mt-2'></i>
            <h3 className='card-mainhead' >Adventures</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum dolorem, reprehenderit laudantium repudiandae in earum .</p>

          </div>

        </div>

      </div>

    </div>
    </>

      

       

  )
}

export default Services
