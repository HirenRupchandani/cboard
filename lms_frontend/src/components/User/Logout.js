// to remove the data of logged in user when clicked on logout. 


function Logout(){

    localStorage.removeItem('studentLoginStatus'); 
    window.location.href = '/student-login';
     
    return(
        <div></div>
    );
}

export default Logout;