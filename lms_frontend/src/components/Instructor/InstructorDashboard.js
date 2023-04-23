import {Link} from 'react-router-dom';
import InstructorRightSideBar from './InstructorRightSideBar';
import InstructorLeftSideBar from './InstructorLeftSideBar';
import InstructorMyCourses from './InstructorMyCourses';
import { useState,useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api'

function InstructorDashboard(){
    const [dashData, setDashData] = useState([]);
    const instructorId = localStorage.getItem('instructorId'); 

    
    useEffect(() =>{
        document.title = 'Instructor Dashboard | Home'
        try{
            axios.get(baseUrl+'/instructor/dashboard/'+instructorId)
            .then((res)=>{
            console.log(res.data);
            setDashData(res.data);
            });
        }catch(error){
            console.log(error);
        }
    }, []);

    return (
        <div className='container mt-4'>
        <div className='row'>
            <div>
                <InstructorMyCourses/>
            </div>
            <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="fullname">Full Name</label>
                                    <Link value={dashData.total_teacher_courses}
                                    name = 'courses' to='/teacher-courses' className="form-control form-control-md"></Link>
                                </div>
            <div>
                <InstructorRightSideBar/>
            </div>
        </div>
        </div>
    
    )
}

export default InstructorDashboard;