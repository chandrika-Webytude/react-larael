import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history('/leave');
        }
    }, [])

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useNavigate();

    async function login1() {
        let item = { name, email, password }
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        // history.push("/leave")
        history('/leave');
    }

    return (
        <>              

            <div className="col-sm-6 offset-sm-3 top" >
                <h1>Register page</h1>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" />
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" />
                <br></br><button onClick={login1} className="btn btn-primary">Submit</button>
            </div>
        </>

    )
}
export default Login