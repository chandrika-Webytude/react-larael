import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from './http'
import Header from './Header'
import Sidebar from './Sidebar'


export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/editHoliday/' + id + '/edit').then((res) => {
        // http.get('/editHoliday/' + id).then((res) => {
            setInputs({
                date: res.data.date,
                holiday: res.data.holiday,
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
        http.post('/updateHoliday/' + id, inputs).then((res) => {
            navigate('/Holidays');
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
                                <h2>Update Holiday</h2>
                            </div>
                        </div>
                        <form name="leave_form" method="POST" action="" className="row" >
                            <div className="date">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" id="FromDate" name="date" value={inputs.date || ''} onChange={handleChange} />
                            </div>

                            <div className="holiday">
                                <label htmlFor="" className="form-label">Holiday</label>
                                <input type="text" name="holiday" value={inputs.holiday || ''} onChange={handleChange} />
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