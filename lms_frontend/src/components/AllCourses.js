import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'


function AllCourses(){

    const [courseData, setcourseData] = useState([]);
    // Fetching the courses when the page loads 
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/course').then((response) =>
            {
                setcourseData(response.data);
            });
        }
        catch(error){
            console.log(error);
        }
      
    },[]);

    return (
        <div className="container mt-4">
        <h3 className = "pb-3 my-1 mt-5"> Latest Courses</h3>
        <div className = "row mb-5">
        {courseData && courseData.map((course, index) =>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <Link to = {`http://localhost:3000/detail/${course.id}`}> <img src= {course.course_image} className="card-img-top img-thumbnail" alt={course.title}/></Link>
                    <div className="card-body">
                        <Link to = {`http://localhost:3000/detail/${course.id}`}> <h5 className="card-title">{course.title}</h5> </Link>
                    </div>
                </div>
            </div>
            )}

        </div>
            {/* For pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                    <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AllCourses;