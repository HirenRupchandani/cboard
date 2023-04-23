import {Link } from 'react-router-dom';
import InstructorLeftSideBar from './InstructorLeftSideBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api'

function ChangePassword(){
    const[instructorData, setInstructorData] = useState({
        'password': '',
    });

    const instructorId = localStorage.getItem('instructorId'); 

    const handleChange = (event) => {  
        setInstructorData({               
                ...instructorData,             
                [event.target.name]: event.target.value
        });
        }
    
        const submitForm =()=> {
            const instructorFormData = new FormData();
            instructorFormData.append('password', instructorData.password)
            
            
            try{
                axios.post(baseUrl+'/instructor/change-password/'+instructorId, instructorFormData).then((response) => {
                    if (response.status===200 || response.status===201){
                        Swal.fire({
                            title: 'You have successfully changed your password',
                            toast: true,
                            icon: 'success',
                            position:'top-right',
                            showConfirmButton: false,
                            timer:3000,
                            timerProgressBar:true,
                            showCloseButton: true
                          });

                        setTimeout(function() {
                            window.location.replace('/instructor-dashboard');
                          }, 3000);
                        
                        
                 }
                });
            }catch(error){
                console.log(error);
                setInstructorData({'status': 'error'})
            }
        };
        useEffect(() =>{
            document.title = 'Instructor Password Change'
        })
    
        const instructorLoginStatus = localStorage.getItem('instructorLoginStatus'); 
        if (instructorLoginStatus !== 'true'){
            window.location.href = '/instructor-login';
        }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside>
                    <InstructorLeftSideBar/>
                </aside>
                <section className='col-md-6'>
                <div className='card'>
                    <h5 className='card-header'> Change Password </h5>
                    <div className='card-body'>
                        <div className="mb-3 row">
                            <label for="newpassword" className="col-sm-3 col-form-label">New Password</label>
                            <div className="col-sm-10">
                            <input type="password" className = "form-control" name="password" value={instructorData.password} onChange={handleChange} id="inputPassword"></input>
                            </div>
                        </div>
                        {/* <div className="mb-3 row">
                            <label for="confirm" className="col-sm-3 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                            <input type="text" className = "form-control" id="confirm"/>
                            </div>
                        </div> */}
                        <div className="col-md-2 float-end mx-3 my-1 row">
                            <button className='btn btn-info' onClick={submitForm}>Update</button>
                        </div>
                        <div className="col-md-2 float-end mx-3 my-1 row">
                            <button className='btn btn-dark'>Cancel</button>
                        </div>

                    </div>

                </div>
                
                </section>
            </div>
        </div>
    )
}

export default ChangePassword;