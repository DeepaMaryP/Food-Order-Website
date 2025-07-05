import React from 'react'
import { useNavigate } from 'react-router-dom'
import { storeDefaultDish } from '../helpers/dishHelper';

function Login() {

    const navigate = useNavigate();

    const doLogIn = (event) => {
        event.preventDefault();
        storeDefaultDish();
        navigate('/admin/dishes');
    }

    const gotoHome =() =>{
        navigate('/home');
    }

    return (
        <div>
            <button onClick={doLogIn}>Admin Click</button>
            <button className='m-2' onClick={gotoHome}>User Click</button>
        </div>

    )
}

export default Login
