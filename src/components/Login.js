import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("Logged in Successfully", "success")
            history("/")
        }
        else {
            props.showAlert("Invalid Details", "danger")

        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{color:"white", fontFamily:"inherit"}} >
            <h2 className='mt-3 my-3' id='loginhead' >Login to continue to RemindBookNotes:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3" >
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{backgroundColor:"#cfcfff"}} type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input style={{backgroundColor:"#cfcfff"}} type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button  type="submit" className="btn btn-primary"  > Submit </button>
            </form>
        </div>
    )
}

export default Login
