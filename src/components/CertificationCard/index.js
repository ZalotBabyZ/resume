import React from 'react';
import './style.css';

function CertificationCard() {
  return (
    <div className="card certification-card">
      <div className="card-head">CERTIFICATION</div>
      <div className="card-body">
        <div className="line"></div>
        <div className="timeline-object">
          <div className="timeline-point"> </div>
          <div className="timeline-date"> 2020/09 </div>
          <div className="timeline-list"> 2020/09 </div>
        </div>
        <div className="timeline-object">
          <div className="timeline-point"> </div>
          <div className="timeline-date"> 2020/09 </div>
          <div className="timeline-list"> 2020/09 </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
