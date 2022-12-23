import Header from './Header'
import React, { useState, useEffect } from "react";
import '../App.css';
import { Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';

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
    const history = useNavigate();

    async function deleteEmployee(id) {

        // let item = { first_name, middle_name, last_name, ctc, email, email_company }
        let result = await fetch("http://localhost:8000/api/deleteEmployee/"+id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify()
        });
        result = await result.json();
        console.warn("result", result);
        history("EmployeeEdit/"+id);
    }



    return (
        <div>
            <Header />
            <div className="dashboard">
                <div className="dashboard-main">
                    <div className="dashboard-tab">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Employees Details</h2>
                            </div>
                            <div className="dashboard-nav">
                                <ul className="navbar-nav">
                                    <li>
                                        <a target="_blank" href="Employee" className="navbar-item active">Add Employee<span>
                                            &#8594; </span></a>
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
                                    <Link to={"EmployeeEdit/"+item.id}><span className='btn btn-success'>Edit</span></Link>
                                        <button  onClick={() => { deleteEmployee(item.id) }} className='btn btn-danger'>Delete</button>
                                    </td>
                    
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
export default EmployeesList