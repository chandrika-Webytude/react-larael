import Header from './Header'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function Employee() {
    const [first_name, setfirst_name] = useState("");
    const [middle_name, setmiddle_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [ctc, setctc] = useState("");
    const [email, setemail] = useState("");
    const [email_company, setemail_company] = useState("");
    const history = useHistory();
    
    async function addEmployee() {

        let item = { first_name, middle_name, last_name, ctc, email, email_company }
        let result = await fetch("http://localhost:8000/api/employee", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        history('/EmployeesList');
    }
    return (
        <div>
            <Header />
                <div className="dashboard height">
                    <div className="dashboard-main">
                        <div className="dashboard-form">
                            <div className="table-top">
                                <div className="page-title">
                                    <h2>Employee Application Form</h2>
                                </div>
                            </div><br></br>
                            <label>First Name</label>
                            <input type="text" value={first_name} onChange={(e) => setfirst_name(e.target.value)} className="form-control" />
                            <label>Middle Name</label>
                            <input type="text" value={middle_name} onChange={(e) => setmiddle_name(e.target.value)} className="form-control" />
                            <label>Last Name</label>
                            <input type="text" value={last_name} onChange={(e) => setlast_name(e.target.value)} className="form-control" />
                            <label>Ctc</label>
                            <input type="ctc" value={ctc} onChange={(e) => setctc(e.target.value)} className="form-control" />
                            <label>Email</label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" />
                            <label>Email Company</label>
                            <input type="text" value={email_company} onChange={(e) => setemail_company(e.target.value)} className="form-control" />
                            {/* <br></br><button onClick={addEmployee} className="btn btn-primary">Submit</button> */}
                            <div className="form-submit">
                                {/* <input type="hidden" name="id"> */}
                                <input type="submit" className="btn btn-primary" name="employee" onClick={addEmployee} value="Submit" />
                            </div>
                        </div>
                    </div >
                </div>
            </div>
    )
}
export default Employee