import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from './http'
export default function Edit(props) {
  // console.warn("props",props.match.params.id)
  const { id } = useParams();

  // const [data, setData] = useState([])
  const [inputs, setInputs] = useState({});
  const [reason, setreason] = useState({});
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

  const submitForm = () => {
    http.post('/updateLeave/' + id, inputs).then((res) => {
      navigate('/');
      console.warn(res)
    })
  }


  return (
    <div>


      <div className="dashboard height">
        <div className="dashboard-main">
          <div className="dashboard-form">
            <div className="table-top">
              <div className="page-title">
                <h2>Leave Application Form</h2>
              </div>
            </div>
            <form name="leave_form" method="POST" action="" className="row" >
            <div className="from_date col-md-6">
              <label htmlFor="" className="form-label">From Date</label>
              <input type="date" value={inputs.from_date || ''} onChange={handleChange} />
            </div>
            <div className="to_date col-md-6">

              <label htmlFor="" className="form-label">To Date</label>
              <input type="date" value={inputs.to_date || ''} onChange={handleChange} />
            </div>
            <div className="reason">
              <label htmlFor="" className="form-label">Reason for the Leave</label>
              <input type="text" value={inputs.reason || ''} onChange={handleChange} />
            </div>
            <div className="projects">
              <label htmlFor="" className="form-label">Your Current Working projects</label>
              <input type="text" value={inputs.projects || ''} onChange={handleChange} />
            </div>
            <div className="note">
              <label htmlFor="" className="form-label">Note</label>
              <input type="text" value={inputs.note || ''} onChange={handleChange} />
            </div>
            <div className="form-submit">
              <input type="submit" className="btn btn-primary" name="leave" onClick={submitForm} value="Submit" />
              {/* <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button> */}

            </div>
            </form>
          </div>
        </div >
      </div>

      {/* <h2>leave User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label htmlFor="" className="form-label">reason</label>
            <input type="text" name="reason" className="form-control mb-2" value={inputs.reason || ''} onChange={handleChange} />

            <label htmlFor="" className="form-label">projects</label>
            <input type="projects" name="projects" className="form-control mb-2"
              value={inputs.projects || ''}
              onChange={handleChange}
            />

            <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
          </div>
        </div>
      </div> */}
      {/* <input type="text" defaultValue={data.reason} /> */}
      {/* <div>{console.log(data)}</div> */}
      {/* <h2>{data}</h2> */}
    </div >
  )
}
