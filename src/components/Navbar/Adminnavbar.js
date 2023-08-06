import React from 'react'
import './Adminnavbar.css'

function Adminnavbar() {
  return (
    <div>
        
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
      
    </div>
  )
}

export default Adminnavbar
