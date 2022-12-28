import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from './Protected'

function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    // console.warn(user);
    const history = useNavigate();
    function logout() {
        localStorage.clear();
        history('/login');
    }
    return (
        <div>
            <div className="top-bar">
                <div className="logo">
                    {/* <a href="index.php"><img src="logo.svg" alt=""></a> */}
                    <a href="index.php"></a>
                </div>
            </div>
            {/* <Sidebar /> */}

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                {/* <Link to='/AddHoliday'>Sidebar</Link> */}
                                <Link to='/leave'>Leave form</Link>
                                <Link to='/'>Leave History</Link>
                                <Link to='/Holidays'>Holidays</Link>
                                <Link to='/EmployeesList'>EmployeesList</Link>
                                <Link to='/PersonalDetails'>PersonalDetails</Link>
                                {/* <Link to='/EditHoliday'>EditHoliday</Link> */}


                                {/* <Link to='/Holidays'>Hrms Holidays</Link> */}
                            </>
                            :
                            <>
                                <Link to='/register'>Register</Link>
                                <Link to='/login'>Login</Link>
                            </>

                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }
            </Navbar>
            <div className="logout">
                <a href="#" className="admin"> <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                <div className="logout-password">
                    {/* <a href="logout.php">Logout <i className="fa-solid fa-user-xmark"></i></a> */}
                </div>
            </div>
        </div>

    )
}
export default Header