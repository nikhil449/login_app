import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Signup() {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { Email, Password })
            .then(result => console.log(result))
            .catch(err => console.log(err))


    }
    return (
        <>
            <div>
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email" name="Email" id="" />

                    <br />

                    <label>Password</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="Password" id="" />
                    <br />
                    <input type="submit" />
                </form>
            </div>

            <div>
                <Link to="/Login">Login</Link>
            </div>
        </>
    )
}
export default Signup




