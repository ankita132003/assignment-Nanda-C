import React, { useState } from 'react';
import '../App.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function Register() {

  let navigate = useNavigate();

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    const cloudName = "dkbce8o4g";

    data.append("file", image);
    data.append("upload_preset", "iorzdtav"); // set up your upload_preset on cloudinary.

    return axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, data, {
      onUploadProgress: ProgressEvent => {
        //track your progress here
        console.log(ProgressEvent.loaded / ProgressEvent.total * 100);
      }
    }).then((res) => {
      console.log(res.data.secure_url);
      setUrl(res.data.secure_url)
      console.log(url)
      return res.data.secure_url;
    }).catch(console.log);
  }





  const [user, setUser] = useState({
    fullName: "",
    email: "",
    company: "",
    position: "",
    phoneNumber: "",
    linkedInProfile: "",
    areasOfExpertise: "",
    experience: "",
    availability: "",
    resumeURL: ""
  })




  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })

  }



  const handleRegister = (e) => {
    e.preventDefault();
    user.resumeURL = url
    console.log(user)
    axios.post("http://localhost:5000/register", user)
      .then(res => {
        navigate('/HomePage');
        console.log(res)

      })
  }

  return (

    <div className="container ">
      <div className="row ">
        <div className="col-3"></div>
        <div className="col-sm-5 mb-3 mt-4 mb-sm-0">
          <div className="card register">
            <div className="card-body">
              <h2 className="card-title app">Registeration Form</h2>
              <p className="card-text">
                <form method="post" className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="fullName" className="form-label" >Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" value={user.fullName} onChange={handleChange} />
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
                    <label htmlFor="phoneNumber" className="form-label">Phone no.</label>
                    <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="linkedInProfile" className="form-label">linkedInProfile</label>
                    <input type="text" className="form-control" id="linkedInProfile" name="linkedInProfile" value={user.linkedInProfile} onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="areasOfExpertise" className="form-label">areasOfExpertise</label>
                    <input type="text" className="form-control" id="areasOfExpertise" name="areasOfExpertise" value={user.areasOfExpertise} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input type="text" className="form-control" id="experience" name="experience" value={user.experience} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="availability" className="form-label">availability</label>
                    <input type="text" className="form-control" id="availability" name="availability" value={user.availability} onChange={handleChange} />
                  </div>
                  <div className='col-12'>
                    <label htmlFor="resumeURL">Resume URL</label>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    ></input>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={handleRegister} >Sign in</button>

                  </div>
                </form>


                <button onClick={uploadImage}>upload</button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;