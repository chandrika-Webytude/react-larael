import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Test_login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/leave');
        }
    }, [])

    async function login1(event) {
        event.preventDefault();
        let item = { email, password }
        let result = await fetch("http://localhost:8000/api/test_login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
        // console.log(result.id);
        localStorage.setItem("user-info", JSON.stringify(result.id));
        history('/leave');
    }

    return (
        <>
            <section className="main">
                <div className="dashboard">
                    <div className="dashboard-main">
                        <div className="dashboard-form">
                            <div className="table-top">
                                <div className="page-title">
                                    <h2>Login</h2>
                                </div>
                            </div>

                            <form className="row" >
                                <div className="from_date">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control mb-2" onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="Password">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" onChange={(e) => setpassword(e.target.value)} className="form-control mb-2" />
                                </div>
                                <div className="form-submit">
                                    <input type="submit" className="btn btn-primary" name="employee" onClick={login1} value="Submit" />
                                </div>
                            </form>

                        </div>
                    </div >
                </div>
            </section >
        </>

    )
}
export default Test_login