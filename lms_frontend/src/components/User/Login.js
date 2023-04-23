// import {Link} from 'react-router-dom';

// function Login(){
//     return (
//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-4 offset-4'>
//                     <div className='card'>
//                         <h5 className='card-header text-center'>
//                             Sign in to your account
//                         </h5>
//                         <div className='card-body'>
//                             <form>
//                                 <div className="form-outline mb-4">
//                                     <label className="form-label" for="email">Email address</label>
//                                     <input type="email" id="email" className="form-control form-control-lg" />
//                                 </div>
//                                 <div className="form-outline mb-4">
//                                     <label className="form-label" for="password">Password</label>
//                                     <input type="password" id="password" className="form-control form-control-lg" />
//                                 </div>
//                                 <div className="pt-1 mb-4">
//                                     <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
//                                 </div>
//                                 <a className="small text-muted" href="#!">Forgot password?</a>
//                                 <p className="mb-5 pb-lg-2" >
//                                     Don't have an account? <Link to="/user-register">Register here</Link>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Login;

import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const baseUrl = 'http://127.0.0.1:8000/api'

function Login(){

    const [studentLoginData, setstudentLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setstudentLoginData({
            ...studentLoginData, [event.target.name]: event.target.value
        });
    }

   const submitForm = () => {
    const studentFormData = new FormData();
    studentFormData.append('email', studentLoginData.email)
    studentFormData.append('password', studentLoginData.password)

    try{
        axios.post(baseUrl+ '/student-login',studentFormData)
        .then((response) => {
            if (response.data.bool === true){
                // console.log(response.data.student_id)
                const id = response.data.student_id
                localStorage.setItem('studentLoginStatus', true);
                localStorage.setItem('student_id',id);
                window.location.href = 'user-dashboard';
            }
        });

    }catch(error){
        console.log(error);
    }
   }

   const studentLoginStatus = localStorage.getItem('studentLoginStatus');   
   
   if (studentLoginStatus === 'true'){
    window.location.href = '/student-dashboard';
   }

    useEffect(() =>{
        document.title = 'Student Login'
    })

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='card'>
                        <h5 className='card-header text-center'>
                            Sign in to your account
                        </h5>
                        <div className='card-body'>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input type="email"  onChange={handleChange} name="email" value={studentLoginData.email} 
                                    className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" onChange={handleChange} 
                                    value={studentLoginData.password} name="password" 
                                    className="form-control form-control-lg" />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button onClick={submitForm} className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                </div>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" >
                                    Don't have an account? <Link to="/user-register">Register here</Link>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login;