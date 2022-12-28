import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Test_login() {

    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");

    const history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/leave');
        }
    }, [])

    async function login1(){
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
        localStorage.setItem("user-info", JSON.stringify(result));
        history('/leave');
    }

    return (
        <>                

            <div className="col-sm-6 offset-sm-3 top" >
                <h1>Login page</h1>
                <label>Email</label>
                <input type="text" onChange={(e) => setemail(e.target.value)} className="form-control" />
                <label>Password</label>
                <input type="password" onChange={(e) => setpassword(e.target.value)} className="form-control" />
                <br></br><button onClick={login1} className="btn btn-primary">Submit</button>
            </div>
        </>

    )
}
export default Test_login