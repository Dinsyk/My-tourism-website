import axios from 'axios'
import React,{useState} from 'react'
import './Login.css'
import Navbar from '../../components/Navbar/Navbar'


function Login() {
    const [datas,setDatas]=useState({})


    const change=(e)=>{
        const{name,value}=e.target
        setDatas({...datas,[name]:value})
    }
    console.log(datas);

    const onclickLogin=(e)=>{
        e.preventDefault();
        console.log(datas);
        axios.post('http://localhost:4000/login/login',datas).then((response)=>{
            console.log(response);
    
            localStorage.setItem('persons-id',response.data.data)
             console.log(response.data.data);
        }).catch((err)=>{
            console.log(err);
        })

    }
  return (
    <>
    <div className='container nav-container'>
        <Navbar/>

    </div>
    <div className='container login-container'>
    <div className='login-box'>
        <img className='avatar-image image-fluid' src="/assets/login-avatarimage.png" alt="" />
        <h1 className='login-head mt-3'>Login here</h1>
        <form>
            <div className='loginform-inputs'>
                <div className='form-group'>
                    <input type="text" className='form-control username-box 'name='username' id='uname' placeholder='enter username' onChange={change} />

                </div>

                <div className='form-group'>
                    <input type="text" className='form-control password-box mt-3' name='password' id='pword' placeholder='enter pasword'onChange={change} />

                </div>
                
                <div className='form-group loginbtn-div'>
                    <input type="submit" value='login here' onClick={onclickLogin} className='mt-3 login-button'/>

                </div>

            </div>
        </form>

    </div>

    </div>
   
      
    </>
  )
}

export default Login
