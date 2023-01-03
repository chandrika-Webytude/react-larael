import { Link, useNavigate } from "react-router-dom";
// import Protected from './Protected'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
    // const user = JSON.parse(localStorage.getItem('user-info'));
    const history = useNavigate();
    function logout() {
        localStorage.clear();
        history('/login');
    }
    return (
        <div className="top-bar">
        {/* <!-- Logo --> */}
        <div className="logo">
        <Link to="#"><img src="assets/images/webytude-logo.png" alt=""/></Link>
        </div>
            <h4>Good Morning Chandrika 😊</h4>
        {/* <!-- Logout --> */}
        <div className="logout">
            <Link to="#" className="admin">Welcome Admin <i className="fa-solid fa-angle-down"></i></Link>
            <div className="logout-password">
                <Link onClick={logout} to="/login">Logout <i className="fa-solid fa-user-xmark"></i></Link>
            </div>
        </div>
    </div>

    )
}
export default Header