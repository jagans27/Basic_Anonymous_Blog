import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Page Not Found</h2>
            <Link to="/">Back to Home page</Link>
        </div>
    );
}

export default NotFound;