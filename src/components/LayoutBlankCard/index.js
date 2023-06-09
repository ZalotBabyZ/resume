import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const work = [];

function BlankCard() {
  return (
    <div className="card timeline-card" style={{ visibility: 'hidden' }}>
      <div className="card-head">XXX</div>
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
                      <>
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
                            <p key={ind}>
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
                      </>
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

export default BlankCard;
