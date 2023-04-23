import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/'            //setting the base URL
function AllInstructors(){
    const[instructor, setInstructor] = useState(null); //the instructor data is first null and the data will be set in "setInstuctor" 
    useEffect(() =>{
        //console.log('Component loaded')             //this will create a side effect and show the message in console
        axios.get(baseUrl+'instructor/').then((response) => {  
            //console.log(response.data);                 //axios returns all the data in the default 'data' obj
            setInstructor(response.data);
        });
    },[]);
    console.log(instructor);
    
    return(
        <div className="container mt-4">
        <h3 className = "pb-3 my-1 mt-5"> Our Instructors </h3>
        <div className = "row mb-5">
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Hannah Baker</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">James Packer</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Pamela Beesly</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Jim Halpert</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title"> Ryan Howard</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Kelly Kapoor</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Andy Bernard</h5> </Link>
                    </div>
                </div>
            </div>
            <div className = "col-md-3 mb-4">
                <div className="card">
                    <a href = "#"> <img src="logo512.png" className="card-img-top img-thumbnail" alt="..."/></a>
                    <div className="card-body">
                        <Link to = "/"> <h5 className="card-title">Kevin Malone</h5> </Link>
                    </div>
                </div>
            </div>
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

export default AllInstructors;