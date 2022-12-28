import React, { useState, useEffect } from "react";
import '../App.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function HolidaysList() {

    const [data, dataSet] = useState([])
    const [date, setdate] = useState("");
    const [holiday, setholiday] = useState("");
    const [id, setid] = useState("");

    // useEffect(() => {
    //     getUsers();
    // }, [])

    // function getUsers() {
    //     fetch("http://localhost:8000/api/editHoliday").then((result) => {
    //         result.json().then((resp) => {
    //             dataSet(resp)
    //             setdate(resp.date)
    //             setholiday(resp.holiday)


    //         })
    //     })
    // }



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
    // async function UpdateHolidays(id) {
    //     let result = await fetch("http://localhost:8000/api/editHoliday/" + id, {
    //         method: 'POST',
    //     });
    //     result = await result.json();
    //     console.warn("result", result);
    //     dataSet(result)
    // }


    function SelectHolidays(id) {
        console.warn("function called",data[id-0]);
        let item=data[id-0];
        setdate(item.date)
        setholiday(item.holiday)
    }


    // delete id 
    async function deleteHoliday(id) {
        let result = await fetch("http://localhost:8000/api/deleteHoliday/" + id, {
            method: 'DELETE',
        });
        result = await result.json();
        console.warn("result", result);
        getData()
    }
    async function getData() {
        let result = await fetch("http://localhost:8000/api/HolidaysList", {
            method: 'POST',
        });
        result = await result.json();
        dataSet(result);
    }

    return (
        <div>
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
                                        <td>
                                            <Link to={"/UpdateHolidays/" + item.id}><span className='btn btn-success'>Edit</span></Link>
                                            {/* <Link to={"/UpdateHolidays/" + item.id}> <span onClick={() => { UpdateHolidays(item.id) }} className='btn btn-success'>Edit</span></Link> */}
                                            {/* <span onClick={() => { UpdateHolidays(item.id) }} className='btn btn-success'>Edit</span> */}
                                            {/* <Link><span className='btn btn-danger'>Delete</span></Link> */}
                                            <span onClick={() => { if(window.confirm('Are you sure to delete this record ?')) deleteHoliday(item.id) }} className='btn btn-danger'>Delete</span>

                                        {/* <button onClick={() => SelectHolidays(item.id)}>Update</button> */}
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <input type="text" defaultValue={date} /><br></br><br></br>
                            <input type="text" defaultValue={holiday} /><br /><br />
                            <button>Update Holiday</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )


}
export default HolidaysList