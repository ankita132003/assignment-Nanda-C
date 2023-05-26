import React, { useEffect, useState } from "react";
import "../App.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
    const [userData, setUserData] = useState([])
   


    

    useEffect(() => {
        axios.get('http://localhost:5000/getRegisteredUser')
            .then((data) => {
                console.log(data.data)
                setUserData(data.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
   
    const handleDelete = (id)=>{
       
        axios.get(`http://localhost:5000/deleteUser/${id}`)
        .then((res)=>{
            console.log(res)
            console.log("delete" , id)
            setUserData(oldValues => {
                return oldValues.filter(user => user.id !== id)
              })
              window.location.reload();   
        }).catch((error)=>[
            console.log(error)
        ])
        
}



    return (
        <div className="homepage">
            <h1 className="app">Registered User's Data</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>SrNo.</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>phoneNumber</th>
                        <th>linkedInProfile</th>
                        <th>areasOfExpertise</th>
                        <th>experience</th>
                        <th>availability</th>
                        <th>resumeURL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {userData.map((i, index) => {
                        return (
                            <tr key={index}>
                                
                                <th scope="row">{index+1}</th>
                                <td>{i.fullName}</td>
                                <td>{i.email}</td>
                                <td>{i.company}</td>
                                <td>{i.position}</td>
                                <td>{i.phoneNumber}</td>
                                <td>{i.linkedInProfile}</td>
                                <td>{i.areasOfExpertise}</td>
                                <td>{i.experience}</td>
                                <td>{i.availability}</td>
                                <td>{i.resumeURL}</td>
                                <td>
                                    <Link to = {`/Edit/${i._id}`} className="btn btn-success mx-2 my-1" > Edit </Link>
                                    <button className="btn btn-danger mx-2 my-1"  onClick={()=>handleDelete(i._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            
        </div>
    )
}
export default HomePage;