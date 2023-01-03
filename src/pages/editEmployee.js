import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from './http'
import Header from './Header'
import Sidebar from './Sidebar'

export default function EmployeeEdit(props) {
    console.warn("props", props)

    const { id } = useParams();
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      getUsers()
    }, []);
  
    async function getUsers() {
      http.get('/editEmployee/' + id + '/edit').then((res) => {
        setInputs({
          first_name: res.data.first_name,
          middle_name: res.data.middle_name,
          last_name: res.data.last_name,
          ctc: res.data.ctc,
          email: res.data.email,
          email_company: res.data.email_company,
        });
      });
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
  
    const submitForm = (event) => {
        event.preventDefault();
      http.post('/updateEmployee/' + id, inputs).then((res) => {
        navigate('/EmployeesList');
        console.warn(res)
      })
    }

    return (
        <section className="main">
            <Header />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-main">
                    <div className="dashboard-form">
                        <div className="table-top">
                            <div className="page-title">
                                <h2>Employee Application Form</h2>
                            </div>
                        </div>
                        <form className="row" >
                            <div className="from_date col-md-6">
                                <label className="form-label">First Name</label>
                                <input type="text" name="first_name" value={inputs.first_name || ''} onChange={handleChange} />
                            </div>
                            <div className="to_date col-md-6">
                                <label className="form-label">Middle Name</label>
                                <input type="text" name="middle_name" value={inputs.middle_name || ''} onChange={handleChange} />
                            </div>
                            <div className="to_date col-md-6">
                                <label className="form-label">Last Name</label>
                                <input type="text" name="last_name" value={inputs.last_name || ''} onChange={handleChange} />
                            </div>
                            <div className="to_date col-md-6">
                                <label className="form-label">Ctc</label>
                                <input type="text" name="ctc" value={inputs.ctc || ''} onChange={handleChange} />
                            </div>
                            <div className="to_date col-md-6">
                                <label className="form-label">Email</label>
                                <input type="text" name="email" value={inputs.email || ''} onChange={handleChange} />
                            </div>
                            <div className="to_date col-md-6">
                                <label className="form-label">Email Company</label>
                                <input type="text" name="email_company" value={inputs.email_company || ''} onChange={handleChange} />
                            </div>
                            <div className="form-submit">
                                <input type="submit" className="btn btn-primary" name="employee" onClick={submitForm} value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

