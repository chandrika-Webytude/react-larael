import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../pages/Header'

class AddHolidays extends Component {

    state = {
        date: '',
        holiday: '',
    }
    handleInput = (e) => {
        this.setState({
            [e.target.date]: e.target.value
        })
    }

    saveHoliday = async (e) => {
        e.preventDefault();
        // let result = await fetch("http://localhost:8000/api/holiday",this.state);
        let result = await fetch("http://localhost:8000/api/holiday", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            // body: JSON.stringify(item)
        });
        if (result.data.status === 200) {
            console.log('added succedully');
            this.setState({
                date: '',
                holiday: '',
            });
        }
    }

    render() {
        return (
            <div>
                <Header />

                <br></br><br></br><div className='container'>
                    <div className='row'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add Holiday</h4>
                                <Link to={'/Holidays'} className='btn btn-primary btn-sm float-end'> Back</Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.saveHoliday}>
                                    <div className='form-group mb-3'>
                                        <label>Date</label>
                                        <input type="date" name="date" onChange={this.handleInput} value={this.state.date} className="form-control" />
                                        {/* <input type="date" name="date" className="form-control" /> */}
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Holiday Name</label>
                                        <input type="text" name="holiday" onChange={this.handleInput} value={this.state.holiday} className="form-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}
export default AddHolidays