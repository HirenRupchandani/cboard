import {Link, useParams} from 'react-router-dom';
import InstructorLeftSideBar from './InstructorLeftSideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

function EnrolledStudents(){

    const [studentData, setstudentData] = useState([]);

    const {course_id} = useParams();

    // Fetching the courses when the page loads 
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-students/'+ course_id).then((response) =>
            {
                setstudentData(response.data);
            });
        }
        catch(error){
            console.log(error);
        }
      
    },[]);

    // console.log(courseData);

    return(
        <div className='container mt-4 col-md-12'>
            <div className = "row">
                <aside className='col-md-2' >
                    <InstructorLeftSideBar/>
                </aside>
                <section className='col-md-10'>
                <div className="card">
                <h5 className='card-header'>Enrolled Student List</h5>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            {/* <th>Course Code</th> */}
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {studentData.map((row,index) => 
                                    <tr>
                                         <td><Link to= {`/view-student/` + row.student.id}>{row.student.full_name}</Link></td>
                                         <td>{row.student.email}</td>
                                         <td>{row.student.username}</td>
                                         <td><Link class='btm btn-info btn-sm' to= {`/view-student/` + row.student.id}>View</Link></td>
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

export default EnrolledStudents;