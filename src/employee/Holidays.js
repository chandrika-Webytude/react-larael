import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Header from './Header'
import http from "../pages/http"
import { format } from 'date-fns'
// import Moment from 'moment';

function HolidaysList() {

    const [data, dataSet] = useState([])
    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.post('/HolidaysList').then(res => {
            dataSet(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete('/deleteHoliday/' + id).then(res => {
            fetchAllUsers();
        })
    }

    return (
        <section className="main">
            {/* <section className="main"></section> */}
            <Header />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-main">
                    <div className="dashboard-tab">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Holiday Details</h2>
                            </div>
                            <div className="dashboard-nav">
                                <ul className="navbar-nav">
                                    <li>
                                        <Link to='/AddHoliday'  className="navbar-item active">Add Holiday<span> &#8594; </span></Link>
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
                                {
                                    data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{++index}</td>
                                            <td>{(format(new Date(item.date), 'dd-MM-yyyy'))}</td>
                                            {/* EEEE used for week day name */}
                                            <td>{(format(new Date(item.date), 'EEEE'))}</td>
                                            <td>{item.holiday}</td>
                                            <td>
                                                {/* <Link to={"/UpdateHolidays"}><span className="edit" style={{ "--color": "green" }} ><i className="fa-solid fa-pen-to-square"></i></span></Link> */}
                                                <Link to={"/UpdateHolidays/" + item.id}><span className="edit" style={{ "--color": "green" }} ><i className="fa-solid fa-pen-to-square"></i></span></Link>
                                                <Link onClick={() => { if (window.confirm('Are you sure to delete this record?')) deleteUser(item.id) }}><span className="trash" style={{ "--color": "red" }}><i className="fa-solid fa-trash"></i></span></Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </section >
    )


}
export default HolidaysList