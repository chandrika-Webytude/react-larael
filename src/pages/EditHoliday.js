import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UpdateHolidays(props) {
    // console.warn(id)
    // console.warn("props",props.match.params.id)
    const [data, setData] = useState([])
    const [date, setdate] = useState("");
    const [holiday, setholiday] = useState("");
    const [id, setid] = useState("");
    // useEffect(async ()=>{
    //     let result = await fetch("http://localhost:8000/api/editHoliday/"+props.match.params.id);
    //     result = await result.json();
    //     setData(result)
    // })
        // console.warn("result", result);
    useEffect(() => {

        async function UpdateHolidays() {
            let result = await fetch("http://localhost:8000/api/editHoliday/" + 1, {
                method: 'POST',
            });
            result = await result.json();
            console.warn("result", result);
            setData(result)
            setdate(result.date)
            setholiday(result.holiday)
        }
        UpdateHolidays()
    }, [])

    return (
        <div>
            <h1>UpdateHolidays</h1>
            <br></br><input type="text" defaultValue={data.name} /><br></br>
              <input type="text" defaultValue={date} /><br></br><br></br>
        </div>
    )
}
export default UpdateHolidays