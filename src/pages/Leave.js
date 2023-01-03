import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import http from './http'

function Leave() {

    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/leave',inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <>
            <div>
                {/* <!-- Main --> */}
                <section className="main">
                    <Header />
                    <div className="dashboard">
                        <Sidebar />
                        <div className="dashboard-main">
                            <div className="dashboard-form">
                                <div className="table-top">
                                    <div className="page-title">
                                        <h2>Leave Application Form</h2>
                                    </div>
                                </div>
                                <form name="leave_form" method="POST" action="" className="row" >
                                    <div className="from_date col-md-6">
                                        <label htmlFor="" className="form-label">From Date</label>
                                        <input type="date" name="from_date" className="form-control mb-2" value={inputs.from_date || ''} onChange={handleChange} autoComplete="off" />
                                    </div>
                                    <div className="to_date col-md-6">
                                        <label htmlFor="" className="form-label">To Date</label>
                                        <input type="date" name="to_date" className="form-control mb-2" value={inputs.to_date || ''} onChange={handleChange}  autoComplete="off" />
                                    </div>
                                    <div className="projects">
                                        <label htmlFor="" className="form-label">File</label>
                                        <input type="file" name="file" className="form-control mb-2" value={inputs.file || ''} onChange={handleChange} />
                                    </div>
                                    <div className="reason">
                                        <label htmlFor="" className="form-label">Reason for the Leave</label>
                                        <input type="text" name="reason" className="form-control mb-2" value={inputs.reason || ''} onChange={handleChange} />
                                    </div>
                                    <div className="projects">
                                        <label htmlFor="" className="form-label">Your Current Working projects</label>
                                        <input type="text" name="projects" className="form-control mb-2" value={inputs.projects || ''} onChange={handleChange} />
                                    </div>
                                    <div className="note">
                                        <label htmlFor="" className="form-label">Note</label>
                                        <input type="text" name="note" className="form-control mb-2" value={inputs.note || ''} onChange={handleChange} />

                                    </div>
                                    <div className="form-submit">
                                        <button type="button" onClick={submitForm} className="btn btn-primary">Create</button>

                                    </div>
                                </form>

                            </div>
                        </div >
                    </div>
                </section >
            </div>
        </ >

    )
}
export default Leave