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
        <>
            <h1>21</h1>
            <head>
                <title>HR Webytude</title>
                <Link rel="stylesheet" href="assets/font-icon/css/all.min.css"></Link>
                <Link rel="icon" type="image/png" href="assets/images/Fav-Icon.png" ></Link>
                <Link rel="stylesheet" href="assets/bootstrap/bootstrap.min.css" ></Link>
                <Link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css" ></Link>
                <Link rel="stylesheet" href="assets/css/style.css" ></Link>
            </head>
            <body>
                <section className="main">
                    <div className="top-bar">

                        <div className="logo">
                            <a href="index.php"><img src="assets/images/webytude-logo.png" alt=""></img></a>
                        </div>

                        <div className="logout">
                            {/* <a href="#" className="admin"> <img style="width: 32px; border-radius: 100%;" src="admin/upload/<?php echo $emp_data['profile_photo'] ?>" alt=""></img> <i className="fa fa-caret-down" aria-hidden="true"></i></a> */}
                            <div className="logout-password">
                                {/* <a href="logout.php">Logout <i className="fa-solid fa-user-xmark"></i></a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>

    )
}
export default Header