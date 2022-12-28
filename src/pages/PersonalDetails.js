import Sidebar from './Sidebar'
function PersonalDetails() {
    return (
        <>
            <h1>fsfh</h1>
            <div class="dashboard">
            < Sidebar/>
                <div class="employee-profile-container">
                    <div class="employee-profile-detail">
                        <div class="profile-detail-inner">
                            <div class="profile">
                                <div class="profile-img">
                                    <img src="admin/upload/<?php echo $row['profile_photo'] ?>" alt=""></img>
                                </div>
                                <div class="profile-detail">
                                    <h3 class="name">d</h3>
                                    <span class="position">df</span>

                                    <span class="designation">sdf</span>
                                    <span class="join-date">Joining Dat</span>

                                </div>
                            </div>

                            <div class="detail">
                                <p><span>Phone </span>ds</p>
                                <p><span>Email </span>as</p>
                                <p><span>Birth Date</span>xd</p>
                                <p><span>Gender</span>df</p>

                            </div>
                        </div>
                    </div>
                    <div class="profile-tabs">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                                <div class="employee-information">
                                    <div class="informations">
                                        <h5>Personal Details</h5>
                                        <p><span>Alternate contact</span>hfh</p>
                                        <p><span>Blood Group</span> fh</p>
                                        <p><span>Address </span> d</p>
                                        <p><span>City </span>gb</p>
                                        <p><span>District </span>df</p>
                                        <p><span>State </span>h</p>
                                        <p><span>Pin Code</span> fsdf</p>
                                        <p><span>Marital status</span>jgj</p>
                                        <p><span>Employment of spouse</span>hfh</p>

                                        <p><span>No. of children</span> fgh</p>

                                    </div>
                                    <div class="informations">
                                        <h5>Professional Details</h5>

                                        <p><span>Company Email </span>fg</p>
                                        <p><span>Status</span> fh</p>
                                        <p><span>Year of Contracts</span> fgdg</p>
                                        <p><span>Probation Period </span> dfg</p>
                                        <p><span>Confirmation Date</span> dgdf</p>
                                    </div>
                                    <div class="informations">
                                        <h5>Professional Details</h5>

                                        <p><span>Company Email </span>fg</p>
                                        <p><span>Status</span> fh</p>
                                        <p><span>Year of Contracts</span> fgdg</p>
                                        <p><span>Probation Period </span> dfg</p>
                                        <p><span>Confirmation Date</span> dgdf</p>
                                    </div>
                                    <div class="informations">
                                        <h5>Professional Details</h5>

                                        <p><span>Company Email </span>fg</p>
                                        <p><span>Status</span> fh</p>
                                        <p><span>Year of Contracts</span> fgdg</p>
                                        <p><span>Probation Period </span> dfg</p>
                                        <p><span>Confirmation Date</span> dgdf</p>
                                    </div>

                                    <div class="informations">
                                        <h5>Documents</h5>

                                        <p><span>Pan Card </span> <a target="_blank" href="admin/upload/<?php echo $row['pan_card'] ?>"> View</a></p>
                                        <p><span>Adhar Card </span> <a target="_blank" href="admin/upload/<?php echo $row['adhar_card'] ?>"> View</a></p>
                                        <p><span>CV </span> <a target="_blank" href="admin/upload/<?php echo $row['cv'] ?>"> View</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalDetails