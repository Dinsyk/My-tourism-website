import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'




function Edit() {
    const {id} = useParams()
    console.log(id);
    const [edit, setEdit] = useState({});
    const[update,setUpdate]=useState([])
    const navigate=useNavigate()

    
  
console.log(edit);
    useEffect(()=>{
        axios.get(`http://localhost:4000/addpackage/view-editablepackage/${id}`).then((response)=>{
            console.log(response);
            setEdit(response.data.singledata)
        })
      } ,[])


        const change=(e)=>{
        const{name,value}=e.target
        setEdit({...edit,[name]:value})

    }


    const onclickedit=(e)=>{
        e.preventDefault()
        // console.log('hi');
        axios.post('http://localhost:4000/addpackage/editaction',edit).then((response)=>{
            // navigate('/package')
        console.log(response);

        }).catch((err)=>{
            console.log(err);
        })

    }
      

  return (
    <div>
         <div className='container edit-container'>
            <div className='row edit-firstrow'>
                <div className='col-lg-12'>
                    <h1 className='edit-head'>E<span className='edit-span'>dit</span></h1>

                </div>

            </div>
            <div className='row edit-secondrow'>
                <div className='col-lg-4'>

                </div>
                <div className='col-lg-4 editform-div'>
                <form>
                    <div className='edit-inputs mb-5'>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='packagename' type="text" value={edit.packagename} onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='days' type="text" value={edit.days} onChange={change} />

                    </div>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='hotelname' type="text" value={edit.hotelname} onChange={change} />

                    </div>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='food' type="text" value={edit.food} onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='description' type="text" value={edit.description} onChange={change}/>

                    </div>
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' type="file" />

                    </div> 
                    <div className='form-group'>
                        <input className='form-control edit-input mb-3' name='price' type="text" value={edit.price} onChange={change}/>

                    </div>
                    <div className='button-div'>
                        <input  className='btn edit-button' type="submit" value='edit here' onClick={onclickedit} />

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

export default Edit
