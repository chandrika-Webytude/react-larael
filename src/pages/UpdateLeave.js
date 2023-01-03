import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from './http'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Edit(props) {

  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
  }, []);


  async function getUsers() {
    http.get('/editLeave/' + id + '/edit').then((res) => {
      setInputs({
        reason: res.data.reason,
        from_date: res.data.from_date,
        to_date: res.data.to_date,
        projects: res.data.projects,
        note: res.data.note,
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
    http.post('/updateLeave/' + id, inputs).then((res) => {
      navigate('/');
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
                <h2>Update Leave</h2>
              </div>
            </div>
            <form name="leave_form" method="POST" action="" className="row" >
              <div className="from_date col-md-6">
                <label htmlFor="" className="form-label">From Date</label>
                <input type="date" id="FromDate" name="from_date" value={inputs.from_date || ''} onChange={handleChange} />
              </div>
              <div className="to_date col-md-6">

                <label htmlFor="" className="form-label">To Date</label>
                <input type="date" id="ToDate" name="to_date" value={inputs.to_date || ''} onChange={handleChange} />
              </div>
              <div className="reason">
                <label htmlFor="" className="form-label">Reason for the Leave</label>
                <input type="text" name="reason" value={inputs.reason || ''} onChange={handleChange} />
              </div>
              <div className="projects">
                <label htmlFor="" className="form-label">Your Current Working projects</label>
                <input type="text" name="projects" value={inputs.projects || ''} onChange={handleChange} />
              </div>
              <div className="note">
                <label htmlFor="" className="form-label">Note</label>
                <input type="text" name="note" value={inputs.note || ''} onChange={handleChange} />
              </div>
              <div className="form-submit">
                {/* <input type="submit" className="btn btn-primary" name="leave" onClick={submitForm} /> */}
                <br></br><button type="button" onClick={submitForm} className="btn btn-primary">Update</button>

              </div>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}
