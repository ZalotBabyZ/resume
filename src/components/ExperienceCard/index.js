import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const work = [
  {
    year: '2019 - 2020',
    work: 'Online Merchant',
    more: [
      'ajidsui shop, Shopee [small Stationery shop]',
      'Gain experience: Logistic and online shop backside system.',
    ],
    web: 'https://shopee.co.th/baobaozc',
  },
  {
    year: '2016 - 2021',
    work: 'Prasert Apartment',
    more: ['Apartment owner.', 'Customer service, Management and IT support.'],
    web: '',
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
                <div className="list-subhead">
                  {list.more
                    ? list.more.map((item) => {
                        return <p>{item}</p>;
                      })
                    : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
