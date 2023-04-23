import {Link, useParams} from 'react-router-dom';
import LeftSideBar from './LeftSideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

function MyCourses(){

    const [courseData, setcourseData] = useState([]);
    const student_id = localStorage.getItem('student_id');

    // Fetching the courses when the page loads 
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-courses/' + student_id).then((response) =>
            {
                setcourseData(response.data);
                console.log(response.data);
            });
        }
        catch(error){
            console.log(error);
        }
      
    },[]);

    return(
        <div className='container mt-4 col-md-12'>
            <div className = "row">
                <aside>
                {/* <aside className='col-md-2' > */}
                    <LeftSideBar/>
                </aside>
                <section className='col-md-10'>
                <div className="card">
                <h5 className='card-header'>My Enrolled Courses</h5>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            {/* <th>Course Code</th> */}
                                            <th>Name</th>
                                            <th>Created By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {courseData.map((row, index) => 
                                    <tr>
                                         <td><Link to={`/detail/`+row.course.id}>{row.course.title}</Link></td>
                                         <td><Link to= {`/view-student/` + row.course.instructor.id}>{row.course.instructor.full_name}</Link></td>
                                         <td>
                                            <button className='btn btn-danger btn-sm active'>Un-Enroll</button>
                                         </td>
                                    </tr> 
                                    )}
                                    </tbody>
                                </table>

                            </div>
                                
                            </div>

                </section>
            </div>
    </div>
        
    );
}

export default MyCourses;