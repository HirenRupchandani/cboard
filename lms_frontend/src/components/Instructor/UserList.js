// import {Link, useParams} from 'react-router-dom';
// import InstructorLeftSideBar from './InstructorLeftSideBar';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8000/api';
// const siteUrl = 'http://127.0.0.1:8000/';

// function UserList(){
    
//     const [moduleData, setModuleData] = useState([]);
//     const [courseData, setcourseData] = useState([]);
//     const [studentData, setstudentData] = useState([]);
//     const instructorId = localStorage.getItem('instructorId');

//     useEffect(() =>{
//         try{
//             axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId)
//             .then((res)=>{
//                 setstudentData(res.data)
//             });
//         }catch(error){
//             console.log(error);
//         }
//     },[]);

//     return (
        
//     )

// }