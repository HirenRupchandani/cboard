import {Link, useParams} from 'react-router-dom';
import InstructorLeftSideBar from './InstructorLeftSideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

function MyStudents(){

    const [studentData, setstudentData] = useState([]);

    const instructorId = localStorage.getItem('instructorId'); 

    // Fetching the courses when the page loads 
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/fetch-all-enrolled-students/' + instructorId).then((response) =>
            {
                setstudentData(response.data);
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
                <aside className='col-md-4' >
                    <InstructorLeftSideBar/>
                </aside>
                <section className='col-md-10'>
                <div className="card">
                <h5 className='card-header'>All Student List</h5>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            {/* <th>Course Code</th> */}
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Interested Categories</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {studentData.map((row,index) => 
                                    <tr>
                                         <td><Link to= {`/view-student/` + row.student.id}>{row.student.full_name}</Link></td>
                                         <td>{row.student.email}</td>
                                         <td>{row.student.username}</td>
                                         <td>{row.student.interested_categories}</td>
                                         <td>
                                            <Link to="#" className='btn btn-sm btn-warning'>Assignment</Link>
                                            <Link to="#" className='btn btn-sm btn-success'>Add Assignment</Link>
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

export default MyStudents;