import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Registration.css'
import Navbar from '../../components/Navbar/Navbar'


function Registration() {
    const [datas,setDatas]=useState({})

    const change=(e)=>{
        const{name,value}=e.target
        setDatas({...datas,[name]:value})
        console.log(datas);
    }

    const onclickRegister=(e)=>{
        e.preventDefault();
        console.log(datas);
        axios.post('http://localhost:4000/registration/registration',datas).then((response)=>{
            console.log(response);
            // localStorage.setItem('persons-id',response.data.data.login_id)
            // console.log(response.data.data.login_id);
        }).catch((err)=>{
            console.log(err);
        })

    }
  return (
    <>
    <div className='container nav-container'>
    <Navbar className='navv'/>
    </div>
   

   
    
      <div className='container register-container'>
      
    <div className='register-box'>
        <img className='avatar-regimage image-fluid' src="/assets/login-avatarimage.png" alt="" />
        <h1 className='register-head mt-3'>Register here</h1>
        <form>
            <div className='registerform-inputs'>
                <div className='form-group'>
                    <input type="text" className='form-control name-box 'name='name' id='name' placeholder='enter name' onChange={change} />

                </div>

                <div className='form-group'>
                    <input type="text" className='form-control email-box mt-3'name='email' id='email' placeholder='enter email' onChange={change} />

                </div>
                <div className='form-group'>
                    <input type="text" className='form-control number-box mt-3' name='phone' id='phone' placeholder='enter phonenumber' onChange={change} />

                </div>
               
                <div className='form-group'>
                    <input type="text" className='form-control username-box mt-3 ' name='username' id='uname' placeholder='enter username'onChange={change} />

                </div>

                <div className='form-group'>
                    <input type="text" className='form-control password-box mt-3' name='password' id='pword' placeholder='enter pasword' onChange={change} />

                </div>
                <div className='form-group'>
                    <input type="file" className='form-control image-box mt-3' placeholder='upload your photo' />

                </div>
                <div className='form-group registerbtn-div'>
                    <input type="submit" value='Register here here'onClick={onclickRegister} className='register-button mt-3'/>

                </div>

            </div>
        </form>

    </div>

    </div>
      
    </>
  )
}

export default Registration
