import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import InstructorDetail from './InstructorDetail';
import Search from './Search';
import {Routes, Route} from 'react-router-dom';

// Students
import CourseDetails from './CourseDetails';
import Login from './User/Login';
import Logout from './User/Logout';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import Account from './User/Account';
// import ChangePassword from './User/ChangePassword';
import SubmitAssignment from './User/SubmitAssignment';

// Instructors
import InstructorLogin from './Instructor/InstructorLogin';
import InstructorRegister from './Instructor/InstructorRegister';
import InstructorDashboard from './Instructor/InstructorDashboard';
import InstructorAccount from './Instructor/InstructorAccount';
import InstructorMyCourses from './Instructor/InstructorMyCourses';
import MyStudents from './Instructor/MyStudents';
import AddCourse from './Instructor/AddCourse';
import EditCourse from './Instructor/EditCourse';
import InstructorLogout from './Instructor/InstructorLogout';
import AllModules from './Instructor/CourseModules';
import EditModule from './Instructor/EditModule';
import EnrolledStudents from './Instructor/EnrolledStudents';
import InstructorProfileSettings from './Instructor/InstructorProfileSettings';
import ChangePassword from './Instructor/ChangePassword';
import AddAssignment from './Instructor/AddAssignment';
import InstructorAssignments from './Instructor/InstructorAssignments';
import ViewEditAssignment from './Instructor/ViewEditAssignment';
import ViewSubmission from './Instructor/ViewSubmission';
import GradeSubmission from './Instructor/GradeSubmission';

// Listing pages 
import AllCourses from './AllCourses';
import AllInstructors from './AllInstructors';
import CategoryCourses from './CategoryCourses';
import AddModule from './Instructor/AddModule';


function Main() {
  return (
    <div className="App">
        <Header/>
        {/* Routes act as a switch that will only load the component that is required */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:course_id' element={<CourseDetails/>}/>
            <Route path='/user-login' element={<Login/>}/>
            <Route path='/user-logout' element={<Logout/>}/>
            <Route path='/search/:searchstring' element={<Search/>}/>
            <Route path='/user-register' element={<Register/>}/>
            <Route path='/user-dashboard' element={<Dashboard/>}/>
            <Route path='/my-courses' element={<MyCourses/>}/>
            <Route path='/my-account' element={<Account/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
            <Route path='/instructor-login' element={<InstructorLogin/>}/>
            <Route path='/instructor-register/' element={<InstructorRegister/>}/>
            <Route path='/instructor-dashboard' element={<InstructorDashboard/>}/>
            <Route path='/instructor-account' element={<InstructorAccount/>}/>
            <Route path='/instructor-courses' element={<InstructorMyCourses/>}/>
            <Route path='/instructor-logout' element={<InstructorLogout/>}/>
            <Route path='/add-module/:course_id' element={<AddModule/>}/>
            <Route path='/my-students' element={<MyStudents/>}/>
            <Route path='/add-course' element={<AddCourse />}/>
            <Route path='/edit-course/:course_id' element={<EditCourse />}/>
            <Route path='/instructor-detail/:instructor_id' element={<InstructorDetail />}/>
            <Route path='/instructor-profile-setting' element={<InstructorProfileSettings />}/>
            <Route path='/all-courses' element={<AllCourses />}/>
            <Route path='/all-modules/:course_id' element={<AllModules />}/>
            <Route path='/edit-module/:module_id' element={<EditModule />}/>
            <Route path='/all-instructors' element={<AllInstructors />}/>
            <Route path='/category/:category_slug' element={<CategoryCourses />}/>
            <Route path='/enrolled-students/:course_id' element={<EnrolledStudents/>}/>
            <Route path='/add-assignment/:course_id' element={<AddAssignment/>}/>
            <Route path='/view-assignments/:course_id' element={<InstructorAssignments/>}/>
            <Route path='/view-assignment/:assignment_id' element={<ViewEditAssignment/>}/>
            <Route path='/submit-assignment/:assignment_id' element={<SubmitAssignment/>}/>
            <Route path='/view-submission/:assignment_id' element={<ViewSubmission/>}/>
            <Route path='/grade-assignment/:assignmentResponse_id' element={<GradeSubmission/>}/>

        </Routes>
        
        <Footer/>
    
    </div>
  );
}

export default Main;
