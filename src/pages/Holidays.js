import Header from './Header'
import React, { useState, useEffect } from "react";
import '../App.css';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
function HolidaysList() {
    const [data, dataSet] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:8000/api/HolidaysList", {
                method: 'POST',
            });
            response = await response.json();
            dataSet(response)
        }
        fetchMyAPI()
    }, [])


    return (
        <div>
            <Header />
            <div className="dashboard">
                <div className="dashboard-main">
                    <div className="dashboard-tab">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Holiday Details</h2>
                            </div>
                            <div className="dashboard-nav">
                                <ul className="navbar-nav">
                                    <li>
                                        <a target="_blank" href="AddHoliday" className="navbar-item active">Add Holiday<span>
                                            &#8594; </span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Holiday</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{++index}</td>
                                    <td>{item.date}</td>
                                    <td>Monday</td>
                                    <td>{item.holiday}</td>
                                    <td><Link to={"EditHoliday/"+item.id}><span className='btn btn-success'>Edit</span></Link>
                                    <Link><span className='btn btn-danger'>Delete</span></Link></td>
                                </tr>
                            ))}
                             </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div >
    )


}
export default HolidaysList