import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const project = [
  {
    year: '2020 OCT',
    name: 'Pig dice game',
    web: 'https://zalotbabyz.github.io/MiniProject_TossGame',
    list: [
      {
        content: 'Use react class.',
        link: '',
      },
      { content: 'Software Park Thailand Code Camp mini project.', link: '' },
      {
        content: 'https://github.com/ZalotBabyZ/MiniProject_TossGame.git',
        link: 'https://github.com/ZalotBabyZ/MiniProject_TossGame.git',
      },
    ],
  },
  {
    year: '2020 AUG',
    name: 'Oh my muffins game',
    web: 'https://scratch.mit.edu/projects/417525287',
    list: [
      {
        content: 'SCRATCH PROJECT',
        link: '',
      },
      { content: 'Software Park Thailand Precode Camp project.', link: '' },
    ],
  },
];

function MiniprojectCard() {
  return (
    <div className="card timeline-card">
      <div className="card-head">MINI PROJECT</div>
      <div className="card-body">
        <div className="line"></div>
        {project.map((list, listInd) => {
          return (
            <div className="timeline-object" key={listInd}>
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                <div className="list-head--wrap">
                  <span className="list-head">{list.name}:</span>
                  {list.web ? (
                    <a href={list.web} className="list-subhead" target="_blank" rel="noopener noreferrer">
                      &nbsp;&nbsp;&nbsp;{list.web}&nbsp;&nbsp;
                      <FontAwesomeIcon icon="external-link-alt" />
                    </a>
                  ) : null}
                </div>
                {list.list.map((note, ind) => {
                  return (
                    <p key={ind}>
                      <FontAwesomeIcon icon="angle-double-right" />
                      &nbsp;
                      {!note.link ? (
                        <span>{note.content}</span>
                      ) : (
                        <span>
                          <a href={note.link} target="_blank" rel="noopener noreferrer">
                            {note.link}&nbsp;&nbsp;
                            <FontAwesomeIcon icon="external-link-alt" />
                          </a>
                        </span>
                      )}
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

export default MiniprojectCard;
