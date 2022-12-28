import Header from './Header'
import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

function UpdateHolidays() {
    const [date, setdate] = useState("");
    const [holiday, setholiday] = useState("");
    const [id, setid] = useState("");
    const history = useNavigate();
    async function addHoliday() {

        let item = { date, holiday }
        let result = await fetch("http://localhost:8000/api/updateEmployee/" + id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        history('/Holidays');
    }
    return (
        <div>
            <Header />
                <div className="dashboard height">
                    <div className="dashboard-main">
                        <div className="dashboard-form">
                            <div className="table-top">
                                <div className="page-title">
                                    <h2>Update Holiday</h2>
                                </div>
                            </div><br></br>
                            <label>Date</label>
                            <input type="date" value={date} onChange={(e) => setdate(e.target.value)} className="form-control" />
                            <label>Holiday Name</label>
                            <input type="text" value={holiday} onChange={(e) => setholiday(e.target.value)} className="form-control" />
                             <div className="form-submit">
                                {/* <input type="hidden" name="id"> */}
                                <br></br><input type="submit" className="btn btn-primary" name="holiday" onClick={addHoliday} value="Update" />
                            </div>
                        </div>
                    </div >
                </div>
            </div>
    )
}
export default UpdateHolidays