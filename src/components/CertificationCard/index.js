import React from 'react';

const certificate = [
  {
    year: '2020',
    place: 'Software Park Thailand Code Camp',
    course: 'Fullstack Javascript Developer [offline รุ่นที่7]',
    web: 'https://www.codecampthailand.com/',
    certify: '',
    cerLink: '',
  },
  {
    year: '2020',
    place: 'CHULA MOOC Achieve',
    course: 'THINKING LIKE A PROGRAMMER PATHWAY',
    web: 'https://www.chulamoocachieve.com',
    certify: 'certificate link with gold award',
    cerLink: 'https://cert.chulamoocachieve.com/VOF7Z.pdf',
  },
  {
    year: '2016',
    place: 'NET DESIGN',
    course: 'GRAPHIC DESIGN ADVANCED',
    web: 'https://netdesign.ac.th/',
    certify: '',
    cerLink: '',
  },
  {
    year: '2016',
    place: 'NET DESIGN',
    course: 'COMPUTER ART AND GRAPHIC DESIGN',
    web: 'https://netdesign.ac.th/',
    certify: '',
    cerLink: '',
  },
];

function CertificationCard() {
  return (
    <div className="card">
      <div className="card-head">CERTIFICATION</div>
      <div className="card-body">
        <div className="line"></div>
        {certificate.map((list) => {
          return (
            <div className="timeline-object">
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                <div className="list-head--wrap">
                  {list.web ? (
                    <a href={list.web} className="list-head" target="_blank">
                      {list.place}:
                    </a>
                  ) : (
                    <span className="list-head">{list.place}:</span>
                  )}
                  &nbsp;&nbsp;&nbsp; <div className="list-subhead">{list.course}</div>
                </div>
                <p>
                  {list.certify ? (
                    list.cerLink ? (
                      <a href={list.cerLink} target="_blank">
                        + {list.certify}
                      </a>
                    ) : (
                      <>+ {list.certify}</>
                    )
                  ) : null}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CertificationCard;
