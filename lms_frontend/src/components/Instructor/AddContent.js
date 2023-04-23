import {Link} from 'react-router-dom';
import InstructorLeftSideBar from './InstructorLeftSideBar';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddContent(){
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <InstructorLeftSideBar/>
                </aside>
                <div className='col-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                            Add Content
                        </h5>
                        <div className='card-body'>
                            <form>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="title">Module</label>
                                    <input type="text" id="title" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="description">Module Description</label>
                                    <textarea type="text" id="description" className="form-control form-control-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="video">Module video</label>
                                    <input type="file" id="video" className="form-control form-control-md" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="tech">Requirements</label>
                                    <textarea type="text" id="text" className="form-control form-control-lg" />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-primary btn-md btn-block" type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddContent;