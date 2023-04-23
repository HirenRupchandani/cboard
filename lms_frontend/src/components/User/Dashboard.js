import {Link} from 'react-router-dom';
import MyCourses from './MyCourses';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

function Dashboard(){
    return (
        <div className='container col-md-12'>
            <div className='row'>
                <section className='container'>
                    <MyCourses/>
                </section>
                <section>
                    <RightSideBar/>
                </section>
                

           </div>
        </div>
    )
}

export default Dashboard;