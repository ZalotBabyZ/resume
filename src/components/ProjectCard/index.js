import React from 'react';
const project = [
  {
    year: '2020  -  2021',
    name: 'ANCthailand',
    web: '',
    list: [
      { content: 'Medical service web application.', link: '' },
      {
        content:
          'This project is an idea of substitute the Antenatal Care part of Thailand Mom&Child book with an online web application.',
        link: '',
      },
      {
        content: 'Using React antD ExpressJS Sequelize and cloudinary',
        link: '',
      },
      { content: 'Software Park Thailand Code Camp final group project.', link: '' },
      {
        content: 'github frontend:https://github.com/AuJeedJad/ANC-frontend.git',
        link: 'https://github.com/AuJeedJad/ANC-frontend.git',
      },
      {
        content: 'github backend: https://github.com/AuJeedJad/MC2H-API.git',
        link: 'https://github.com/AuJeedJad/MC2H-API.git',
      },
    ],
  },
  {
    year: '2020  -  2021',
    name: 'doZalot project',
    web: 'https://arcwebapp.com',
    list: [
      { content: 'scrum board master [activity log].', link: '' },
      {
        content: 'Using React ExpressJS Sequelize and cloudinary',
        link: '',
      },
      { content: 'Software Park Thailand Code Camp final personal project.', link: '' },
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
];
function ProjectCard() {
  return (
    <div className="card">
      <div className="card-head">PROJECT EXPERIENCE</div>
      <div className="card-body">
        <div className="line"></div>
        {project.map((list) => {
          return (
            <div className="timeline-object">
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                <div className="list-head--wrap">
                  <span className="list-head">{list.name}:</span>
                  {list.web ? (
                    <a href={list.web} className="list-subhead" target="_blank">
                      &nbsp;&nbsp;&nbsp;{list.web}
                    </a>
                  ) : null}
                </div>
                {list.list.map((note) => {
                  if (!note.link) {
                    return <p> + {note.content}</p>;
                  }
                  return (
                    <p>
                      <a href={note.link} target="_blank">
                        + {note.link}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
