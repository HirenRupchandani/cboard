import {Link} from 'react-router-dom';
function LeftSideBar(){
    return(
        <div className='card col-md-2'>
                        <h6 className='card-header text-center'> CRIMSONBOARD</h6>
                        <div className='list-group list-group-flush'>
                            <Link className='list-group-item list-group-item-action' to="/my-account">My Profile</Link>
                            <Link className='list-group-item list-group-item-action' to="/user-dashboard">Dashboard</Link>
                            <Link className='list-group-item list-group-item-action' to="/my-courses">Courses </Link>
                            <Link className='list-group-item list-group-item-action' to="/calendar">Assignments </Link>
                            <Link className='list-group-item list-group-item-action' to="/chat">Chat</Link>
                            <Link className='list-group-item list-group-item-action' to="/change-password">Change Password</Link>
                            <Link className='list-group-item list-group-item-action text-danger' to="/user-login">Logout </Link>
                        </div>
                    </div>
    );

}

export default LeftSideBar