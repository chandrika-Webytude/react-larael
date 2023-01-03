import Sidebar from './Sidebar'
import Header from './Header'
function PersonalDetails() {
    return (
        <>
                {/* <!-- Main --> */}
                <section className="main">
                    {/* <!-- Top Bar --> */}
                    <Header />
                    <div className="dashboard">
  
                        {/* <!-- Side Nav --> */}
                        <Sidebar />
                        
                        {/* <!-- Employee Profile --> */}
                        <div className="employee-profile-container">
                            <div className="employee-title">
                                <h3>Profile</h3>
                                <ul className="breadcrumb-main">
                                    <li>
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li>
                                        Profile
                                    </li>
                                </ul>
                            </div>
                            <div className="employee-profile-detail">
                                <div className="profile-detail-inner">
                                    <div className="profile">
                                        <div className="profile-img">
                                            <a href="#"><img src="assets/images/avatar.jpg" alt="" /></a>
                                        </div>
                                        <div className="profile-detail">
                                            <h3 className="name">John Doe</h3>
                                            <span className="position">UI/UX Design Team</span>

                                            <span className="designation">Web Designer</span>

                                            <span className="employee-id">Employee ID : FT-0001</span>
                                            <span className="join-date">Date of Join : 1st Jan 2013</span>

                                            <a href="#" className="send-message">Send Message</a>
                                        </div>
                                    </div>

                                    <div className="detail">
                                        <p><span>Phone </span> <a href="tel:9876543210">9876543210</a></p>
                                        <p><span>Email </span> <a href="mailto:johndoe@example.com">johndoe@example.com</a></p>
                                        <p><span>Birth </span> 24th July</p>
                                        <p><span>Address </span> 1861 Bayonne Ave, Manchester Township, NJ, 08759</p>
                                        <p><span>Gender</span> Male</p>
                                        <p className="report"><span>Report to</span>
                                            <img src="assets/images/avatar.jpg" alt="Report" width="24px" />
                                            <a href="#">Jeffery Lalor</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className=" active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-profile" role="tabpanel"
                                        aria-labelledby="pills-profile-tab" tabIndex="0">

                                        <div className="employee-information">
                                            <div className="informations">
                                                <h5>Personal Information</h5>

                                                <p><span>Passport No.</span> 9876543210</p>
                                                <p><span>Passport Exp Date.</span> 9876543210</p>
                                                <p><span>Tel</span> <a href="#"> 9876543210</a></p>
                                                <p><span>Nationality</span> Indian</p>
                                                <p><span>Religion</span> Christian</p>
                                                <p><span>Marital status</span> Married</p>
                                                <p><span>Employment of spouse</span> No</p>
                                                <p><span>No. of children</span> 2</p>
                                            </div>
                                            <div className="informations">
                                                <h5>Emergency Contact</h5>

                                                <p><span className="no-dots">Primary</span></p>
                                                <p><span>Name</span> John Doe</p>
                                                <p><span>Relationship</span> Father</p>
                                                <p><span>Phone</span> 9876543210, 9876543210</p>
                                                {/* <hr> */}
                                                <p><span className="no-dots">Secondary</span></p>
                                                <p><span>Name</span> Karen Wills</p>
                                                <p><span>Relationship</span> Brother</p>
                                                <p><span>Phone</span> 9876543210, 9876543210</p>
                                            </div>
                                            <div className="informations">
                                                <h5>Bank information</h5>

                                                <p><span>Bank name</span> ICICI Bank</p>
                                                <p><span>Bank account No.</span> 159843014641</p>
                                                <p><span>IFSC Code</span> ICI24504</p>
                                                <p><span>PAN No</span> TC000Y56</p>
                                            </div>
                                            <div className="information-table">
                                                <h5>Family Informations</h5>
                                                <div className="table-mobile">
                                                    <table className="table table-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Relationship</th>
                                                                <th>Date of Birth</th>
                                                                <th>Phone</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Leo</td>
                                                                <td>Brother</td>
                                                                <td>Feb 16th, 2019</td>
                                                                <td>9876543210</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="information-roadmap">
                                                <h5>Education Informations</h5>

                                                <ul>
                                                    <li>
                                                        <a href="#/" className="name">International College of Arts and Science (UG)</a>
                                                        <p>Bsc Computer Science</p>
                                                        <span className="time">2000 - 2003</span>
                                                    </li>

                                                    <li>
                                                        <a href="#/" className="name">International College of Arts and Science (PG)</a>
                                                        <p>Msc Computer Science</p>
                                                        <span className="time">2000 - 2003</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="information-roadmap">
                                                <h5>Education Informations</h5>

                                                <ul>
                                                    <li>
                                                        <a href="#/" className="name">Web Designer at Zen Corporation</a>
                                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="name">Web Designer at Ron Tech</a>
                                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                                    </li>
                                                    <li>
                                                        <a href="#/" className="name">Web Designer at Dalt Technology</a>
                                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default PersonalDetails