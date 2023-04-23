import {Link } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

const student_id = localStorage.getItem('student_id')

function SubmitAssignment(){
    const [assignmentData, setAssignmentData] = useState([]);
    const [courseData, setcourseData] = useState([]);
    const {assignment_id} = useParams();
    useEffect(() =>{
        try{
            axios.get(baseUrl+'/assignment/'+ assignment_id).then((response) =>
            {
                setAssignmentData(response.data);
                setcourseData(response.data.course);
            });
        }
        catch(error){
            console.log(error);
        }
      
    },[]);

    const [assignmentResponseData, setassignmentResponseData] = useState({
        assignment:'',
        course:'',
        student:'',
        reponse_text:'',
        submission_file:''
    });


   const handleChange = (event) =>{
    setassignmentResponseData({
            ...assignmentResponseData,
            [event.target.name]: event.target.value
        });
   }

   const handleFileChange = (event) =>{
    setassignmentResponseData({
            ...assignmentResponseData,
            [event.target.name]:event.target.files[0]
        });
   }
   
   console.log(assignment_id, student_id);
   
   const formSubmit =()=>{
        const _formData = new FormData();

        setTimeout(function() {
            console.log('Form Data')
        // console.log('Form Data:', assignment_id, courseData.id, student_id, assignmentResponseData.response_text, );
        console.log('Before append', assignmentResponseData);
        _formData.append('assignment', Number(assignmentData.id));
        _formData.append('course', courseData.id);
        _formData.append('student', student_id);
        _formData.append('reponse_text', assignmentResponseData.reponse_text);
        _formData.append('submission_file', assignmentResponseData.submission_file);
        console.log('AFter append::', assignmentResponseData);
        console.log('Form Data:', _formData);
        try{
        axios({
            method: "post",
            url: baseUrl+ '/assignmentResponse/',
            data: _formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((response) => {
                if (response.status==200 || response.status==201){
                    Swal.fire({
                        title: 'Assignment has been modified',
                        toast: true,
                        icon: 'success',
                        position:'top-right',
                        showConfirmButton: false,
                        timer:1000,
                        timerProgressBar:true,
                        showCloseButton: true
                      });
             }
             setTimeout(function() {
                window.location.replace('/user-dashboard');
              }, 1000);
                // console.log(response.data);
                // window.location.href = '/user-dashboard'
            });
    
        }catch(error){
            console.log(error);
        }
          }, 3000);
        
   };

    useEffect(() =>{
        document.title = 'Student Dashboard | Submit Assignment'

    })

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <LeftSideBar/>
                </aside>
                <div className='col-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                            Submit Assignment
                        </h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-4">
                                    <b><label className="form-label" htmlFor="title">Submission for {assignmentData.title}</label></b>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="reponse_text">Assignment Description</label>
                                    <textarea type="text" onChange={handleChange} name='reponse_text' id="reponse_text" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="file">Submission File</label>
                                    <input type="file" onChange={handleFileChange} name='file' id="file" className="form-control form-control-md" />
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

export default SubmitAssignment;