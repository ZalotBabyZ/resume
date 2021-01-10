import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const educate = [
  {
    year: '2020 SEP-DEC',
    place: 'Software Park Thailand Code Camp',
    course: 'Fullstack Javascript Developer [offline รุ่นที่7]',
    web: 'https://www.codecampthailand.com/',
  },
  {
    year: '2009  -  2016',
    place: 'Faculty of Medicine Siriraj Hospital, Mahidol University',
    course: "Bachelor's degree in Medical Science",
    web: 'https://www.si.mahidol.ac.th/',
  },
  {
    year: '2006  -  2009',
    place: 'Triam Udom Suksa School',
    course: '',
    web: 'https://www.triamudom.ac.th/',
  },
  {
    year: '1995  -  2006',
    place: 'St.Francis Xavier Convent School',
    course: '',
    web: 'https://www.sf.ac.th/',
  },
];

function EducationCard() {
  return (
    <div className="card">
      <div className="card-head">EDUCATION</div>
      <div className="card-body">
        <div className="line"></div>
        {educate.map((list, ind) => {
          return (
            <div className="timeline-object" key={ind}>
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                {list.web ? (
                  <a href={list.web} className="list-head" target="_blank">
                    <FontAwesomeIcon icon="external-link-alt" /> {list.place}
                  </a>
                ) : (
                  <span className="list-head">
                    <FontAwesomeIcon icon="unlink" /> {list.place}
                  </span>
                )}
                <div className="list-subhead">{list.course}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationCard;
