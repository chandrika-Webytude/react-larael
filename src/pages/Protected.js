import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(props) {
    let Cmp=props.Cmp
    const history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history('/login');
        }
    }, [])


    return (
        <div>
            <Cmp />
        </div>
    )
}
export default Login