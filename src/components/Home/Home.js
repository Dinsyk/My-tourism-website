import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'


function Home() {
  return (
    <div>
        <div className='container nav-container'>
          <Navbar/>

        </div>
       
        <div className='container home-container '>
            <div className='row home-row'>
                <div className='col-lg-12 '>
                    <h5 className='welcome'>Welcome To World</h5>
                    <h1 className='visit'>Visit<span className='change-placename'></span></h1>
                    <p className='enjoy'>Enjoy your life by travelling</p>
                    <a className='bookplace' href="/book">book place</a>

                </div>

            </div>


            

        </div>

      
    

      
    </div>
  )
}

export default Home
