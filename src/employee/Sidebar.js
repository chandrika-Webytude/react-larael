import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>

            <div className="sidebar-nav">
                <ul className="side-nav">
                    <li className="sidebar-item">
                        <Link to='#' className="navbar-item"><i className="fa-solid fa-calendar-check"></i> Attendance</Link>
                    </li>
                    {/* <li className="sidebar-item">
                        <Link to='/leave' className="navbar-item"><i className="fa-solid fa-calendar-check"></i> Leave Applications</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to='/' className="navbar-item"><i className="fa-solid fa-person-walking-luggage"></i> Leave History</Link>
                    </li> */}
                    <li className="sidebar-item">
                        <Link to='/Holiday' className="navbar-item"><i className="fa-solid fa-sack-dollar"></i> Holidays</Link>
                    </li>
                    {/* <li className="sidebar-item">
                        <Link to='/EmployeesList' className="navbar-item"><i className="fa-solid fa-user"></i> EmployeesList</Link>
                    </li>
                    <li className="sidebar-item">
                    <Link to='/PersonalDetails' className="navbar-item"><i className="fa-solid fa-umbrella-beach"></i> PersonalDetails</Link>
                    </li> */}

                </ul>
            </div>
        </>
    )
}
export default Sidebar