import React from 'react';
import { FaEdit } from 'react-icons/fa';
import './EditProfile.css';

const user = {
  username: 'Jessica Alba',
  email: 'jessica.alba@gmail.com',
  address: '123 Main St',
  nickname: 'jessica.alba',
  dob: '1990-01-01',
  profilePic: 'pictures/jessica-alba.png',
};

function EditProfile() {
  return (
    <div className="edit-profile">
      <div className="profile-pic">
        <img src={user.profilePic} alt="Profile" />
      </div>
      <h1>{user.username}</h1>
      <h2>@{user.nickname}</h2>
      <div className="user-details">
        <div className="detail-item">
          <span className="label">Username:</span>
          <span className="value">{user.username}</span>
          <FaEdit className="edit-icon" />
        </div>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
          <FaEdit className="edit-icon" />
        </div>
        <div className="detail-item">
          <span className="label">Address:</span>
          <span className="value">{user.address}</span>
          <FaEdit className="edit-icon" />
        </div>
        <div className="detail-item">
          <span className="label">Nickname:</span>
          <span className="value">{user.nickname}</span>
          <FaEdit className="edit-icon" />
        </div>
        <div className="detail-item">
          <span className="label">DOB:</span>
          <span className="value">{user.dob}</span>
          <FaEdit className="edit-icon" />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;