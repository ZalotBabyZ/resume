import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const work = [
  {
    year: '2022 - 2023',
    work: 'BlueSeas Enterprise Co., Ltd.',
    more: ['Full-Stack Developer', '[React, nodeJS, mongoDB]'],
    web: 'https://www.blueseas.co.th/',
    project: [
      {
        name: 'blueDoc',
        detail: [
          { content: 'Web application.[React, MongoDB]', link: '' },
          {
            content:
              'Text editor template to generate government document and convert to pdf with stamp and sign system.',
            link: '',
          },
          {
            content: 'Ramathibodi hospital project.',
            link: '',
          },
        ],
      },
    ],
  },
  {
    year: '2021 - 2022',
    work: 'Q box point [Farmbook]',
    more: ['Mobile App developer', '[React native]'],
    web: '',
    project: [
      {
        name: 'FARM TODAY',
        web: 'https://apps.apple.com/us/app/farm-today/id1510326837',
        detail: [
          { content: 'Mobile application.[React native]', link: '' },
          {
            content: 'Help farmers manage their farms and products like personal assistance.',
            link: '',
          },
          {
            content: 'Android link',
            link: 'https://play.google.com/store/apps/details?id=farmbook.farmer.co.projectapp&hl',
          },
          {
            content: 'IOS link',
            link: 'https://apps.apple.com/us/app/farm-today/id1510326837',
          },
        ],
      },
      {
        name: 'FARM SKY',
        web: 'https://apps.apple.com/us/app/farm-sky/id1477303442',
        detail: [
          { content: 'Mobile application.[React native]', link: '' },
          {
            content: 'Help managers and enterprises manage their client farmers.',
            link: '',
          },
          {
            content: 'Android link',
            link: 'https://play.google.com/store/apps/details?id=farmbook.co.projectapp',
          },
          {
            content: 'IOS link',
            link: 'https://apps.apple.com/us/app/farm-sky/id1477303442',
          },
        ],
      },
    ],
  },
  {
    year: '2021',
    work: 'Data Guardian',
    more: ['Frontend developer', '[React]'],
    web: '',
  },
  // {
  //   year: "2019 - 2020",
  //   work: "Online Merchant",
  //   more: [
  //     "ajidsui shop, Shopee [small Stationery shop]",
  //     "Gain experience: Logistic and online shop backside system."
  //   ],
  //   web: ""
  // },
  // {
  //   year: "2016 - 2021",
  //   work: "Prasert Apartment",
  //   more: ["Apartment owner.", "Customer service, Management and IT support."],
  //   web: ""
  // }
];

function ExperienceCard() {
  return (
    <div className="card timeline-card">
      <div className="card-head">WORK EXPERIENCE</div>
      <div className="card-body">
        <div className="line"></div>
        {work.map((list, ind) => {
          console.log(list);
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
                    <FontAwesomeIcon icon="circle" /> {list.work}
                  </span>
                )}
                <div className="list-subhead">
                  {list.more
                    ? list.more.map((item) => {
                        return <p>{item}</p>;
                      })
                    : null}
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
                            <p key={ind} style={{ marginLeft: 10 }}>
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

export default ExperienceCard;
