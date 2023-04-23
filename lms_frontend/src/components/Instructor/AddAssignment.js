import {Link } from 'react-router-dom';
import InstructorLeftSideBar from './InstructorLeftSideBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

const instructor_id = localStorage.getItem('instructorId')
function AddAssignment(){

    const [dateValue, onChange] = useState(new Date().toISOString());

    const [assignmentData, setassignmentData] = useState({
        course:'',
        instructor:'',
        title:'',
        description:'',
        deadline:'',
        assignment_file:''
    });


   const handleChange = (event) =>{
    setassignmentData({
            ...assignmentData,
            [event.target.name]: event.target.value
        });
   }

   const handleFileChange = (event) =>{
    setassignmentData({
            ...assignmentData,
            [event.target.name]:event.target.files[0]
        });
   }
   const {course_id} = useParams();
   console.log(course_id, instructor_id);
   
   const formSubmit =()=>{
        const _formData = new FormData();
        
        _formData.append('course', course_id);
        _formData.append('instructor', instructor_id)
        _formData.append('title', assignmentData.title);
        _formData.append('description', assignmentData.description);
        _formData.append('deadline', dateValue);
        _formData.append('assignment_file', assignmentData.assignment_file);
        console.log(_formData);
        try{
            axios.post(baseUrl+ '/assignment/', _formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                    
                }
            })
            .then((response) => {
                // console.log(response.data);
                window.location.href = '/instructor-dashboard'
            });
    
        }catch(error){
            console.log(error);
        }
   };

    useEffect(() =>{
        document.title = 'Instructor Dashboard | Add Assignment'
    })

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorLeftSideBar/>
                </aside>
                <div className='col-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                            Add Assignment
                        </h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="title">Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="description">Assignment Description</label>
                                    <textarea type="text" onChange={handleChange} name='description' id="description" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="file">Assignment File</label>
                                    <input type="file" onChange={handleFileChange} name='file' id="file" className="form-control form-control-md" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="tech">Deadline</label>
                                    <DateTimePicker name='deadline' onChange={onChange} value={dateValue}/>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button onClick={formSubmit} className="btn btn-primary btn-md btn-block" type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddAssignment;