import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import Header from './Header'

function Holiday() {
    const [data, setdata] = useState("");
    const [date, setdate] = useState("");
    const [holiday, setholiday] = useState("");
    const history = useNavigate();

    async function addHoliday(event) {
        event.preventDefault();
        // console.log("cALL");return false;
        let item = { date, holiday }
        let result = await fetch("http://localhost:8000/api/holiday", {
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
        <section className="main">
            <Header />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-main">
                    <div className="dashboard-form">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Add Holiday</h2>
                            </div>
                        </div>
                        <form >
                            <div className="date">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" required value={date} onChange={(e) => setdate(e.target.value)} className="form-control" />
                            </div>
                            <div className="holiday">
                                <label htmlFor="" className="form-label">Holiday</label>
                                <input type="text" required value={holiday} onChange={(e) => setholiday(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-submit">
                                <input type="submit" className="btn btn-primary" name="submit" onClick={addHoliday} value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}
export default Holiday