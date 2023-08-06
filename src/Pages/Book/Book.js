import React from 'react'
import './Book.css'
import Navbar from '../../components/Navbar/Navbar'

function Book() {
  return (
    <>
   <div className='container nav-container'>
    <Navbar className='navv'/>

   </div>
        <div className='container book-container'>
            <h1 className='book-head'>B<span className='bookhead-span'>ook</span></h1>
            <div className='row book-row'>

                <div className='col-lg-6 border leftbook-page'>
                    <img className='bookpage-leftimage image-fluid' src="/assets/bookpage-image.avif" alt="" />


                </div>

                <div className='col-lg-6 rightbook-page'>
                    <form action="">
                        <div className='input-fields'>
                            <div className='form-group'>
                                <input className='form-control book-inputs' type="text" placeholder='Where To' required/>

                            </div>
                            <div className='form-group'>
                                <input className='form-control book-inputs' type="text" placeholder='How Many' required/>

                            </div>
                            <div className='form-group'>
                                <input className='form-control book-inputs' type="date" placeholder='Arrivals' required/>

                            </div>
                            <div className='form-group'>
                                <input className='form-control book-inputs' type="date" placeholder='leaving' required/>

                            </div>
                            <div className='form-group'>
                                <textarea className='form-control book-inputs' name="" id="" cols="30" rows="10" placeholder='enter your name and details' required></textarea>

                            </div>
                            <div className=' button-div'>
                                <input className='btn booknow-button' type="submit" value='book now'  required/>

                            </div>

                        </div>
                    </form>


                </div>

            </div>

        </div>
      
    </>
  )
}

export default Book
