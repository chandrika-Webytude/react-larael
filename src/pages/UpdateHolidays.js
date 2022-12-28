import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from './http'

export default function Edit(props) {

    const navigate = useNavigate();
    const { id } = useParams();
    const [data, dataSet] = useState([])
    const [date, setdate] = useState("");
    const [holiday, setholiday] = useState("");

    const [inputs,setInputs] = useState({});




    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        // http.get('/editLeave/'+id).then((res)=>{
          http.get('/editHoliday/'+id).then((res)=>{
            setInputs({
                date:res.data.date,
                holiday:res.data.holiday,
                projects:res.data.projects,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }




    // useEffect(() => {
    //     getUsers()
    // }, []);

    // async function getUsers() {
    //     let result = await fetch("http://localhost:8000/api/editHoliday/" + id, {
    //         method: 'POST',
    //     });
    //     result = await result.json()
    //     dataSet(result)
    //     console.warn("result", result);
    // }

    async function addHoliday() {
        let item = { date, holiday }
        let result = await fetch("http://localhost:8000/api/updateHoliday/" + id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        navigate('/Holidays');
    }


    return (
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Date</label>
                        <input type="date" name="date" className="form-control mb-2"
                                value={inputs.date || ''}
                                onChange={handleChange}
                             />
                        <input type="date" value={data.date} onChange={(e) => setdate(e.target.value)} className="form-control" />
                        <label>holiday</label>
                        <input type="holiday" name="holiday" className="form-control mb-2"
                                value={inputs.holiday || ''}
                                onChange={handleChange}
                             />
                        <input type="text" value={data.holiday} onChange={(e) => setholiday(e.target.value)} className="form-control" />
                        <br></br><input type="submit" className="btn btn-primary" name="holidays" onClick={addHoliday} value="Submit" />
                    </div>
                </div>
            </div>
        </div>

    )
}