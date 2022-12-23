import Header from "./Header";
import React, { useState, useEffect } from "react";
// import { Table, } from "react-bootstrap";
// import './App.css';
import { Button } from "react-bootstrap";

function LeaveHistory() {
    const [data, dataSet] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:8000/api/LeaveHistory", {
                method: 'POST',
            });
            response = await response.json();
            dataSet(response)
        }
        fetchMyAPI()
    }, [])



    // async function deleteOpration(id){
    //     let result=await fetch("http://localhost:8000/api/delete/"+id,{
    //         method:'DELETE'
    //     });
    //     result=await result.json();
    //     console.warn(result)
    //     getData(result)
    // }
    // async function getData(){
    //     let result=await fetch("http://localhost:8000/api/LeaveHistory");
    //     result = await result.json();
    //     getData(result)
    // }


    // const deletePerson = async (person) => {
    //     await fetch(`http://localhost:8000/api/delete/${person.id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-type": "application/json"
    //       }
    //     })
    //     await setPeople(people.filter(_person => _person.id !== person.id))
    //   }

    // async function deleteLeave(id) {
    //     let result = await fetch("http://localhost:8000/api/deleteLeave/" + id, {
    //         method: 'DELETE',
    //     });
    //     result = await result.json();
    //     console.warn(result)
    // }



    // function deleteLeave(id) {
    //     fetch('http://localhost:8000/api/delete-student/' + id, {
    //         method: 'POST',
    //         //   body: JSON.stringify({
    //         //     _method: 'PUT'
    //         //   })
    //     }).then((res) => res.json())
    //         .then((response) => {
    //             // console.log(response)
    //         })
    // }


    // deleteLeave = (e, id) =>{
    //     const result =
    // }


    return (
        <div>
            <Header />
            <div className="dashboard height">
                <div className="dashboard-main">
                    <div className="dashboard-form">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Leave Details</h2>
                            </div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>from date</th>
                                    <th>to date</th>
                                    <th>reason</th>
                                    <th>projects</th>
                                    <th>note</th>
                                    {/* <th>file</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{++index}</td>
                                        <td>{item.from_date}</td>
                                        <td>{item.to_date}</td>
                                        <td>{item.reason}</td>
                                        <td>{item.projects}</td>
                                        <td>{item.note}</td>
                                        {/* <td><img src={"http://localhost:8000/" + item.file}></img></td> */}
                                        <td>

                                            <span className="edit">Edit</span>
                                            {/* <span onClick={() => { deleteOpration(item.id) }} className="delete">Delete</span> */}
                                            {/* <button onClick={deletePerson} id="remove-button">REMOVE</button> */}
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeaveHistory