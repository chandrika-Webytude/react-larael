import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Leave() {
    const [from_date, setfrom_date] = useState("");
    const [to_date, setto_date] = useState("");
    const [file, setfile] = useState("");
    const [reason, setreason] = useState("");
    const [projects, setprojects] = useState("");
    const [note, setnote] = useState("");
    const history = useNavigate();
    async function addLeave() {

        let item = { from_date, to_date, reason, file, projects, note }
        let result = await fetch("http://localhost:8000/api/leave", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        // localStorage.setItem("user-info", JSON.stringify(result));
        history('/');
    }
    return (
        <div>
            {/* <div className="col-sm-6 offset-sm-3 top" > */}
            <div className="dashboard height">
                <div className="dashboard-main">
                    <div className="dashboard-form">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Leave Application Form</h2>
                            </div>
                        </div>
                        <label>From Date</label>
                        <input type="date" value={from_date} onChange={(e) => setfrom_date(e.target.value)} className="form-control" />
                        <label>To Date</label>
                        <input type="date" value={to_date} onChange={(e) => setto_date(e.target.value)} className="form-control" />
                        <label>Reason for the Leave</label>
                        <input type="text" value={reason} onChange={(e) => setreason(e.target.value)} className="form-control" />
                        <label>File</label>
                        <input type="file" value={file} onChange={(e) => setfile(e.target.value)} className="form-control" />
                        <label>Your Current Working projects</label>
                        <input type="text" value={projects} onChange={(e) => setprojects(e.target.value)} className="form-control" />
                        <label>Note</label>
                        <input type="text" value={note} onChange={(e) => setnote(e.target.value)} className="form-control" />
                        {/* <br></br><button onClick={addLeave} className="btn btn-primary">Submit</button> */}
                        <div className="form-submit">
                            {/* <input type="hidden" name="id"> */}
                            <input type="submit" className="btn btn-primary" name="leave" onClick={addLeave} value="Submit" />
                        </div>
                    </div>
                </div >
            </div>
        </div>
        // </div >

    )
}
export default Leave