import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"" , email: "", password: "" , cpassword:"" })
  let history= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password}= credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name ,email ,password}),
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
        //Save the auth token and redirect
        localStorage.setItem('token', json.authtoken)
        history("/")
        props.showAlert("Account Created Successfully", "success")


    }
    else {
        props.showAlert("Invalid credentials", "danger")
    }
}
const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}

  return (
    <div style={{color:"white", fontFamily:"inherit"}} className='container mt-3 '>
            <h2 className='my-3' >Create an account to use RemindBookNotes:</h2>

      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input style={{backgroundColor:"#cfcfff"}} type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input style={{backgroundColor:"#cfcfff"}} type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input style={{backgroundColor:"#cfcfff"}} type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input style={{backgroundColor:"#cfcfff"}} type="cpassword" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={3} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
