import React from 'react';
import photo from '../../asset/photo/photo.jpg';
import './style.css';

function ProfileCard() {
  return (
    <div className="card profile-card">
      <div className="photo-box">
        <img src={photo} alt="my picture" className="photo" />
      </div>
      <div className="profile-list-box">
        <div className="quote">NOTHING CAN STOP YOU ONCE YOU HAVE A CLEAR VISION OF WHAT YOU WANT.</div>
        <p className="profile-list"> Chutinan Chirdchoothum </p>
        <p className="profile-list"> Web Developer</p>
      </div>
    </div>
  );
}

export default ProfileCard;
