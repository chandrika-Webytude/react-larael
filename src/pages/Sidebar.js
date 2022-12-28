function Sidebar() {
    return (
    <>

        <div class="sidebar-nav">

            <ul class="side-nav">
                <li class="sidebar-item">
                    <a href="index.php" class="navbar-item"><i class="fa-solid fa-calendar-check"></i> Attendance </a>
                </li>
                <li class="sidebar-item">
                    <a href="leave.php" class="navbar-item"><i class="fa-solid fa-person-walking-luggage"></i> Leave Applications</a>
                </li>
                <li class="sidebar-item">
                    <a href="leave-history.php" class="navbar-item"><i class="fa fa-history" aria-hidden="true"></i> Leave History </a>
                </li>
                <li class="sidebar-item">
                    <a href="leave-balance.php" class="navbar-item"><i class="fa-solid fa-sack-dollar"></i> Leave Balance </a>
                </li>
                <li class="sidebar-item">
                    <a href="personal-details.php" class="navbar-item"><i class="fa-solid fa-user"></i> Personal Details</a>
                </li>
                <li class="sidebar-item">
                    <a href="holidays.php" class="navbar-item"><i class="fa-solid fa-umbrella-beach"></i> Holiday list</a>
                </li>

            </ul>
        </div>
    </>
    )
}
export default Sidebar