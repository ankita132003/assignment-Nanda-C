import React, { useState } from 'react';
import '../App.css';
// import axios from "axios";

function Register() {

    const [user, setUser] = useState({
        name:"",
        email: "",
        company:"",
        position:"",
        contact:"",
        profile:"",
        expertise:"",
        availibility:"",
        file:""
    })

    const handleChange=(e)=>{
        const {name, value} = e.target
        setUser({
            ...user, 
            [name]: value
        })
    }

    const handleRegister=()=>{
        const { email, contact } = user;
      if(email && contact){
        alert("already");
        // axios.post("http://localhost:5000/register", user)
      }else{
        alert("enter")
      }
     
    }

  //  console.log(user);
  return (

    <div className="container ">
    <div className="row ">
     <div className="col-3"></div>
      <div className="col-sm-5 mb-3 mt-4 mb-sm-0">
        <div className="card register">
          <div className="card-body">
            <h2 className="card-title app">Registeration Form</h2>
            <p className="card-text">
              <form className="row g-3">
              <div className="col-md-12">
                  <label htmlFor="name" className="form-label" >Full Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="company" className="form-label">company</label>
                  <input type="text" className="form-control" id="company" name="company" value={user.company} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="position" className="form-label">Position</label>
                  <input type="text" className="form-control" id="position" name="position" value={user.position} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label htmlFor="contact" className="form-label">Phone no.</label>
                  <input type="text" className="form-control" id="contact" name="phone" value={user.phone} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label htmlFor="profile" className="form-label">linkedInProfile</label>
                  <input type="text" className="form-control" id="profile"name="profile" value={user.profile} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="areaOfExpertise" className="form-label">areaOfExpertise</label>
                  <input type="text" className="form-control" id="areaOfExpertise" name="expertise" value={user.expertise} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="experience" className="form-label">Experience</label>
                  <input type="text" className="form-control" id="experience" name="experience" value={user.experience} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="availibility" className="form-label">Availibility</label>
                  <input type="text" className="form-control" id="availibility" name="avalibility" value={user.availibility} onChange={handleChange} />
                </div>
                <div className="col-12 ">
                  
                  <label htmlFor="file">Resume URL</label>
                  <input className="m-4" type="file" id="file" value={user.file} name="file" multiple onChange={handleChange} />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary" onClick={handleRegister} >Sign in</button>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
);
}

export default Register;