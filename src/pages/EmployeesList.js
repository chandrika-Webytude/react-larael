import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom'; import Sidebar from './Sidebar'
import Header from './Header'

function EmployeesList() {
    const [data, dataSet] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:8000/api/EmployeesList", {
                method: 'POST',
            });
            response = await response.json();
            dataSet(response)
        }
        fetchMyAPI()
    }, [])

    async function deleteEmployee(id) {
        let result = await fetch("http://localhost:8000/api/deleteEmployee/" + id, {
            method: 'DELETE',
        });
        result = await result.json();
        console.warn("result", result);
        getData()
    }
    async function getData() {
        let result = await fetch("http://localhost:8000/api/EmployeesList", {
            method: 'POST',
        });
        result = await result.json();
        dataSet(result);
    }

    return (
        <section className="main">
            <Header />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-main">
                    <div className="dashboard-tab">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Employees Details</h2>
                            </div>
                            <div className="dashboard-nav">
                                <ul className="navbar-nav">
                                    <li>
                                        <Link to='/Employee' className="navbar-item active">Add Employee<span> &#8594; </span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>first_name</th>
                                    <th>middle_name</th>
                                    <th>last_name</th>
                                    <th>ctc</th>
                                    <th>email</th>
                                    <th>email_company</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{++index}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.middle_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.ctc}</td>
                                        <td>{item.email}</td>
                                        <td>{item.email_company}</td>
                                        <td>
                                            <Link to={"/editEmployee/" + item.id}><span className="edit" style={{ "--color": "green" }} ><i className="fa-solid fa-pen-to-square"></i></span></Link>
                                            <Link onClick={() => { if (window.confirm('Are you sure to delete this record?')) deleteEmployee(item.id) }}><span className="trash" style={{ "--color": "red" }}><i className="fa-solid fa-trash"></i></span></Link>
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
export default EmployeesList