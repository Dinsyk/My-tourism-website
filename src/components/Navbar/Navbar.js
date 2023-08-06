import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        {/* <div className='container navbar-container'> 
            <div className='container-fluid'> 
                 <div className='row'> 
                     <div className='col-lg-12 '>
                    <nav class="navbar navbar-expand-sm cccc">
                     <div class="container-fluid">
                      <a class="navbar-brand mb-2" id='travel-logo' href=""><span>T</span>ravel</a>
                       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                          <span><i className='fa-solid fa-bars smallnavbar-button'></i></span>
                       </button>
                   <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                     <li class="nav-item">
                      <a class="nav-link active navbar-links" href="/">Home</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/book">Book</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/addpackage">Addpackage</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/package">Packages</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active navbar-links" href="/services">Services</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/gallery">Gallery</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/login">login</a>
                    </li>
                    <li class="nav-item">
                     <a class="nav-link active navbar-links" href="/registration">Register</a>
                    </li>
                    </ul>
                <form class="d-flex">
                 <input class="form-control me-2" type="text" placeholder="Search"/>
                 <button class="btn btn-primary navbarsearch-button" type="button">Search</button>
                </form>
                  </div>
                 </div>
                 </nav>

                    </div> 

                </div> 

            </div> 

        
        </div> */}


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand travel-logo" href="#"><span>T</span><span className='ravel-span'>ravel</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active navbar-links" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbar-links" href="/book">Book</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active  navbar-links" aria-current="page" href="/addpackage">Addpackage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbar-links" href="/package">Packages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  navbar-links" aria-current="page" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbar-links" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active  navbar-links" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbar-links" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbar-links" href="/registration">Register</a>
        </li>
     
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success navbarsearch-button" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Navbar
