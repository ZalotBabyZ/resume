import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const educate = [
  {
    year: '2020 SEP-DEC',
    place: 'Software Park Thailand Code Camp',
    course: 'Fullstack Javascript Developer [offline รุ่นที่7]',
    web: 'https://www.codecampthailand.com/',
    project: [
      {
        year: '2020  -  2021',
        name: 'ANCthailand [Group Final Project]',
        web: '',
        detail: [
          { content: 'Web application.[React, AntD, ExpressJS, Sequelize, Cloudinary]', link: '' },
          { content: 'Medical service web application.', link: '' },
          {
            content:
              'This project is an idea of substitute the Antenatal Care part of Thailand Mom&Child book with an online web application.',
            link: '',
          },
          {
            content: 'Software Park Thailand Code Camp final group project.',
            link: '',
          },
          {
            content: 'github frontend',
            link: 'https://github.com/AuJeedJad/ANC-frontend.git',
          },
          {
            content: 'github backend',
            link: 'https://github.com/AuJeedJad/MC2H-API.git',
          },
        ],
      },
      {
        name: 'doZalot project [Personal Final Project]',
        web: '',
        detail: [
          { content: 'Web application.[React, ExpressJS, Sequelize, Cloudinary]', link: '' },
          { content: 'scrum board master [activity log].', link: '' },
          {
            content: 'Software Park Thailand Code Camp final personal project.',
            link: '',
          },
          {
            content: 'github frontend: https://github.com/ZalotBabyZ/do-zalot-frontend.git',
            link: 'https://github.com/ZalotBabyZ/do-zalot-frontend.git',
          },
          {
            content: 'github backend: https://github.com/ZalotBabyZ/do-zalot-backend.git',
            link: 'https://github.com/ZalotBabyZ/do-zalot-backend.git',
          },
        ],
      },
    ],
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
    <div className="card timeline-card">
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
                  <a href={list.web} className="list-head" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="external-link-alt" /> {list.place}
                  </a>
                ) : (
                  <span className="list-head">
                    <FontAwesomeIcon icon="unlink" /> {list.place}
                  </span>
                )}
                <div className="list-subhead">
                  {list.course}
                  {list.project?.map((list, listInd) => {
                    return (
                      <div style={{ marginLeft: 10 }} key={listInd}>
                        <div className="list-head--wrap">
                          {list.web ? (
                            <a href={list.web} className="list-subhead" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon="external-link-alt" />
                              <span className="list-head">{` ${list.name}`}</span>
                            </a>
                          ) : (
                            <span className="list-head">
                              <FontAwesomeIcon icon="circle" />
                              {` ${list.name}`}
                            </span>
                          )}
                        </div>
                        {list.detail.map((note, ind) => {
                          return (
                            <p style={{ marginLeft: 10 }} key={ind}>
                              <FontAwesomeIcon icon={!!note.link ? 'external-link-alt' : 'angle-double-right'} />
                              &nbsp;
                              {!note.link ? (
                                <span>{note.content}</span>
                              ) : (
                                <span>
                                  <a href={note.link} target="_blank" rel="noopener noreferrer">
                                    {`${note.content}:  ${note.link}`}
                                  </a>
                                </span>
                              )}
                            </p>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationCard;
