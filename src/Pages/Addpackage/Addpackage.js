import React,{useState} from 'react'
import './Addpackage.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Addpackage() {
    const [datas,setDatas]=useState({})
    const [file,setFile]=useState('')
    const navigate=useNavigate()
    console.log(datas);

    const change=(e)=>{
        const{name,value}=e.target
        setDatas({...datas,[name]:value})

    }
    const onclickadpkg=(e)=>{
        e.preventDefault()
        if(file){
            const data=new FormData()
            const filename=file.name
            data.append('name',filename)
            data.append('file',file)
            console.log('fileData',data);
            axios.post('http://localhost:4000/addpackage/upload',data).then((response)=>{
                console.log(response);
            })

        }







        axios.post('http://localhost:4000/addpackage/addpackage',datas).then((response)=>{
            navigate('/package')

        }).catch((err)=>{
            console.log(err);
        })

    }

  return (
    <div>
        <Navbar className='navbar-adpkg'/>
        <div className='container addpackage-container'>
            <div className='row addpackage-firstrow'>
                <div className='col-lg-12'>
                    <h1 className='addpackage-head'>A<span className='addpackage-span'>ddpackage</span></h1>

                </div>

            </div>
            <div className='row addpackage-secondrow'>
                <div className='col-lg-4'>

                </div>
                <div className='col-lg-4 adpkgform-div'>
                <form>
                    <div className='addpackage-inputs mb-5'>
                    <div className='form-group'>
                        <input className='form-control adpkg-input mb-3' name='packagename' type="text" placeholder='packagename' onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control adpkg-input mb-3' name='days' type="text" placeholder='No of days' onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control adpkg-input mb-3' name='hotelname' type="text" placeholder='hotelname' onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control adpkg-inputnmb-3' name='food' type="text" placeholder='type of food(veg ,nonvegor both)' onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control adpkg-input mb-3' name='description' type="text" placeholder='description aboutplace' onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input type="file" placeholder='image' name='image' onChange={(e)=>{setFile(e.target.files[0]);setDatas({...datas,image:e.target.files[0].name});console.log(files[0]);}}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control adpkg-input mb-3' name='price' type="text" placeholder='pricr per person' onChange={change}/>

                    </div>
                   
                    <div className='button-div'>
                        <input  className='btn addpackage-button' type="submit" value='Add' onClick={onclickadpkg} />

                    </div>

                    </div>
                    
                </form>
                    


                </div>
                <div className='col-lg-4'>

                </div>
               

            </div>

        </div>
      
    </div>
  )
}

export default Addpackage
