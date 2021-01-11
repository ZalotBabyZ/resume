import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const work = [
  {
    year: '2019 - 2021',
    work: 'Online Merchant',
    more: 'ajidsui shop, Shopee',
    web: 'https://shopee.co.th/baobaozc',
  },
];

function ExperienceCard() {
  return (
    <div className="card">
      <div className="card-head">WORK EXPERIENCE</div>
      <div className="card-body">
        <div className="line"></div>
        {work.map((list, ind) => {
          return (
            <div className="timeline-object" key={ind}>
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                {list.web ? (
                  <a href={list.web} className="list-head" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="external-link-alt" /> {list.work}
                  </a>
                ) : (
                  <span className="list-head">
                    <FontAwesomeIcon icon="unlink" /> {list.work}
                  </span>
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
