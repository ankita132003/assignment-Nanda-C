import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Edit() {

  const navigate = useNavigate();
  const [editUser, setEditUser] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    phoneNumber: '',
    linkedInProfile: '',
    areasOfExpertise: '',
    experience: '',
    availability: '',
    resumeURL: '',
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/getuserby/${id}`)
      .then((response) => {
        setEditUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateUser = () => {
    axios
      .put(`/updateuser/${id}`, editUser)
      .then((response) => {
        console.log('User updated successfully:', response.data);
        navigate('/HomePage')

      })
      .catch((error) => {
        console.error('Error updating user:', error);

      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-sm-5 mb-3 mt-4 mb-sm-0">
          <div className="card register">
            <div className="card-body">
              <h2 className="card-title app">Update User's Information</h2>
              <p className="card-text">
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={editUser.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={editUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="position" className="form-label">
                      Position
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      name="position"
                      value={editUser.position}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">
                      Experience
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      name="experience"
                      value={editUser.experience}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="position" className="form-label">
                      Position
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      name="position"
                      value={editUser.position}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="phoneNumber" className="form-label">Phone no.</label>
                    <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={editUser.position}
                      onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="linkedInProfile" className="form-label">linkedInProfile</label>
                    <input type="text" className="form-control" id="linkedInProfile" name="linkedInProfile" value={editUser.position}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="areasOfExpertise" className="form-label">areasOfExpertise</label>
                    <input type="text" className="form-control" id="areasOfExpertise" name="areasOfExpertise" value={editUser.position}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input type="text" className="form-control" id="experience" name="experience" value={editUser.position}
                      onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="availability" className="form-label">availability</label>
                    <input type="text" className="form-control" id="availability" name="availability" value={editUser.position}
                      onChange={handleChange} />
                  </div>

                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleUpdateUser}
                    >
                      Update User
                    </button>
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

export default Edit;
