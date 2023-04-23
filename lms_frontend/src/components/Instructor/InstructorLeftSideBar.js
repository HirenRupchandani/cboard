import {Link} from 'react-router-dom';

function InstructorLeftSideBar(){
    return(
        <div className='card'>
                        <h6 className='card-header text-center'> CRIMSON BOARD</h6>
                        <div className='list-group list-group-flush'>
                            <Link className='list-group-item list-group-item-action' to="/instructor-account">My Profile</Link>
                            <Link className='list-group-item list-group-item-action' to="/instructor-dashboard">My Courses</Link>
                            <Link className='list-group-item list-group-item-action' to="/my-students">Students</Link>
                            <Link className='list-group-item list-group-item-action' to="/add-course">Add Course</Link>
                            {/* <Link className='list-group-item list-group-item-action' to="/instructor-courses">My Courses </Link> */}
                            <Link className='list-group-item list-group-item-action' to="/calendar">Calendar </Link>
                            <Link className='list-group-item list-group-item-action' to="/chat">Chat</Link>
                            <Link className='list-group-item list-group-item-action' to="/help">Help </Link>
                            <Link className='list-group-item list-group-item-action' to="/change-password">Change Password</Link>
                            <Link className='list-group-item list-group-item-action text-danger' to="/instructor-logout" href="/instructor-logout">Logout </Link>
                        </div>
                    </div>
    );

}

export default InstructorLeftSideBar;