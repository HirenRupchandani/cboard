import {Link} from 'react-router-dom';
import MyCourses from './MyCourses';
import LeftSideBar from './LeftSideBar';

function Account(){
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className>
                    <LeftSideBar/>
                </aside>
                <section className>
                <div className='card'>
                    <h5 className='card-header'> Profile settings </h5>
                    <div className='card-body'>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="text" className = "form-control" id="staticEmail"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="contact" className="col-sm-2 col-form-label">Contact</label>
                            <div className="col-sm-10">
                            <input type="text" className = "form-control" id="contact"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="profilepic" className="col-sm-2 col-form-label">Profile Photo</label>
                            <div className="col-sm-10">
                            <input type="file" className = "form-control" id="profilepic"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="urls" className="col-sm-2 col-form-label">URLs</label>
                            <div className="col-sm-10">
                            <input type="text" className = "form-control" id="urls"/>
                            </div>
                        </div>
                        <div className="col-md-2 float-end mx-3 my-1 row">
                            <button className='btn btn-info'>Update</button>
                        </div>
                        <div className="col-md-2 float-end mx-3 my-1 row">
                            <button className='btn btn-dark'>Cancel</button>
                        </div>

                    </div>

                </div>
                
                </section>
            </div>
        </div>
    )
}

export default Account;