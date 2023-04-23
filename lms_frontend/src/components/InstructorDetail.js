import { Link } from "react-router-dom";

function InstructorDetail(){

    return(
        <div className="container mt-5">
        <div className="row">
            <div className="col-2">
                <img src="/logo192.png" className="img-thumbnail" alt="Instructor img"/>
            </div>
            <div className="col-10">
                <h3> Prof. Ross Geller </h3>
                <p>
                Ross Geller is a renowned paleontologist with a Ph.D. from the University of California, Berkeley, 
                where he developed a deep passion for studying dinosaur fossils. As a professor of paleontology at New York 
                University, Ross is a respected expert in his field, having published numerous papers and conducted 
                groundbreaking research on the prehistoric creatures. His unwavering dedication to his work is evident 
                in his tireless efforts to uncover new discoveries and expand the boundaries of paleontology. 
                With his competitive spirit and intellectual prowess, Ross has earned a reputation as one of the foremost 
                authorities on dinosaur fossils in the academic community.
                </p>
                <p className="mb-1 fw-bold fs-6">
                    Courses Taught: <br/><Link to = '/category/php'> PHP</Link><br/> 
                    <Link to = '/category/php'> Javascript </Link><br/> 
                    <Link to = '/category/php'> ReactJS</Link>
                </p>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <h5> More Details </h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Contact: rgeller@cb.edu</li>
            </ul>
        </div>
        {/* Can add related courses if needed */}
    </div>
    );
}

export default InstructorDetail;