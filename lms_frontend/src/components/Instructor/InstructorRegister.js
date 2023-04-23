import {Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';



const baseUrl = 'http://127.0.0.1:8000/api/instructor/';

function InstructorRegister(){

    //This will make sure the fields is empty by default
    const[instructorData, setinstructorData] = useState({
        'full_name': '',
        'email': '' ,
        'qualification': '' ,
        'mobile_number': '' ,
        'password': '' , 
        'status': ''

    });

    //To change the value in fields
   const handleChange = (event) => {  
        setinstructorData({               //a spread operator used to set the instructor data using element name of each field 
            ...instructorData,              // to the value being passed.
            [event.target.name]: event.target.value
    });
    }

    //Function to submit the form - it creates a form data object whenever the form is submitted. 
    const submitForm =()=> {
        const instructorFormData = new FormData();
        instructorFormData.append('full_name', instructorData.full_name)
        instructorFormData.append('email', instructorData.email)   
        instructorFormData.append('qualification', instructorData.qualification)   
        instructorFormData.append('mobile_number', instructorData.mobile_number,)   
        instructorFormData.append('password', instructorData.password)      
        
        try{
            axios.post(baseUrl, instructorFormData).then((response) =>{
                setinstructorData({
                    'full_name': '',
                    'email': '' ,
                    'qualification': '' ,
                    'mobile_number': '' ,
                    'password': '' , 
                    'status': 'success'
                });
            });
        }catch(error){
            console.log(error);
            setinstructorData({'status': 'error'})
        }
        

    };

    // const instructorLoginStatus = localStorage.getItem('instructorLoginStatus'); 
    // if (instructorLoginStatus === true){
    //  window.location.href = 'instructor-dashboard'
    // }

    useEffect(() => {                           
        document.title = 'Instructor Sign up';      //an effect hook
    });
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-4 offset-4'>
                {instructorData.status === 'success' ? ( <p className='text-success'>
                    Thank you for registering with Crimson Board!
                </p>):null}
                {instructorData.status === 'error' && <p className='text-danger'>
                    "Oops! Something unexpected occurred!"
                </p>}
                    <div className='card'>
                        <h5 className='card-header text-center'>
                            Sign up to your account
                        </h5>
                        <div className='card-body'>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="fullname">Full Name</label>
                                    <input value={instructorData.full_name} onChange ={handleChange} 
                                    name = 'full_name'  type="text" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input onChange ={handleChange} value={instructorData.email}
                                    name='email' type="email" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="qual">Qualification</label>
                                    <input onChange ={handleChange} value={instructorData.qualification} 
                                     name='qualification' type="text" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="num">Mobile Number</label>
                                    <input onChange ={handleChange} value={instructorData.mobile_number}
                                    name='mobile_number' type="tel" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input onChange ={handleChange} value={instructorData.password} name='password' type="password" 
                                    autoComplete = 'on' className="form-control form-control-lg" />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button onClick={submitForm} type='submit' className="btn btn-dark btn-lg btn-block" >Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default InstructorRegister;