import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Header from './Header'
import http from "./http"

function LeaveHistory() {
    const [data, dataSet] = useState([])
    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.post('/LeaveHistory').then(res => {
            dataSet(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete('/deleteLeave/' + id).then(res => {
            fetchAllUsers();
        })
    }
    return (
        <>
            {/* <!-- Main --> */}
            <section className="main">
                <Header />
                <div className="dashboard">
                    <Sidebar />
                    <div className="dashboard-main">
                        <div className="dashboard-tab">
                            <div className="table-top">
                                <div className="page-title">
                                    <h2>Leave Details</h2>
                                </div>
                                <form method="get" action="" name="name" className="filter-dropdown">
                                    <div className="dashboard-nav">
                                        <ul className="navbar-nav">
                                            <li>
                                                <select name="month" className="form-control">
                                                    <option defaultValue="">Select Month</option>

                                                    <option defaultValue="1">1</option>
                                                </select>
                                            </li>

                                            <li>
                                                <select name="year" className="form-control">
                                                    <option defaultValue="">Select Year</option>
                                                    <option defaultValue="d">12</option>
                                                </select>
                                            </li>
                                            <li>
                                                <a href="?filter=custom" className="navbar-item custom-date-trigger">Custom Date</a>
                                            </li>
                                        </ul>
                                        <input type="hidden" name="filter" defaultValue="yes" />
                                        <div className="custom-date">
                                            <div className="date-main">
                                                <div className="from-date">
                                                    <input type="text" className="datepickerFrom" id="FromEditDate" placeholder="From" name="From" defaultValue="1" autoComplete="off" />
                                                </div>
                                                <div className="to-date">
                                                    <input type="text" id="ToEditDate" className="datepickerTo" placeholder="To" name="To" defaultValue="1" autoComplete="off" />
                                                </div>
                                                <div className="go-date">
                                                    <input type="hidden" name="filter" defaultValue="custom" />
                                                    <input type="submit" className="btn btn-primary" name="Go" defaultValue="Go" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Leaves</th>
                                        <th>From Date</th>
                                        <th>To Date </th>
                                        <th>Projects</th>
                                        <th>Fill up Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{++index}</td>
                                            <td>test</td>
                                            <td>2</td>
                                            <td>{item.from_date}</td>
                                            <td>{item.to_date}</td>
                                            <td>{item.reason}</td>
                                            <td>{item.projects}</td>
                                            <td>{item.note}</td>
                                            {/* <td>
                                                <button type="button" className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure to delete this record?')) deleteUser(item.id) }} >Delete</button>
                                                <Link to={"/UpdateLeave/" + item.id}><span className='btn btn-success'>Edit</span></Link>
                                            </td> */}
                                            <td>
                                                <Link to={"/UpdateLeave/" + item.id}><span className="edit" style={{ "--color": "green" }} ><i className="fa-solid fa-pen-to-square"></i></span></Link>
                                                <Link onClick={() => { if (window.confirm('Are you sure to delete this record?')) deleteUser(item.id) }}><span className="trash" style={{ "--color": "red" }}><i className="fa-solid fa-trash"></i></span></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default LeaveHistory
