import React from 'react';

const educate = [
  {
    year: '2019 - 2021',
    work: 'Online Merchant',
    more: 'ajidsui shop, Shopee',
    web: '',
  },
];

function ExperienceCard() {
  return (
    <div className="card">
      <div className="card-head">WORK EXPERIENCE</div>
      <div className="card-body">
        <div className="line"></div>
        {educate.map((list) => {
          return (
            <div className="timeline-object">
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                {list.web ? (
                  <a href={list.web} className="list-head">
                    {list.work}
                  </a>
                ) : (
                  <span className="list-head">{list.work}</span>
                )}
                <div className="list-subhead">{list.more}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
