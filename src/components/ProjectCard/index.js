import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const project = [
  {
    year: "2021  -  2022",
    name: "FARM TODAY [Qbox Point Co.,Ltd.]",
    web: "https://apps.apple.com/us/app/farm-today/id1510326837",
    list: [
      { content: "Mobile application.", link: "" },
      { content: "Using React native", link: "" },
      {
        content:
          "Help farmers manage their farms and products like personal assistance.",
        link: ""
      },
      {
        content: "Android link",
        link: "https://play.google.com/store/apps/details?id=farmbook.farmer.co.projectapp&hl"
      },
      {
        content: "IOS link",
        link: "https://apps.apple.com/us/app/farm-today/id1510326837"
      }
    ]
  },
  {
    year: "2021  -  2022",
    name: "FARM SKY [Qbox Point Co.,Ltd.]",
    web: "https://apps.apple.com/us/app/farm-sky/id1477303442",
    list: [
      { content: "Mobile application.", link: "" },
      { content: "Using React native", link: "" },
      {
        content: "Help managers and enterprises manage their client farmers.",
        link: ""
      },
      {
        content: "Android link",
        link: "https://play.google.com/store/apps/details?id=farmbook.co.projectapp"
      },
      {
        content: "IOS link",
        link: "https://apps.apple.com/us/app/farm-sky/id1477303442"
      }
    ]
  },
  {
    year: "2020  -  2021",
    name: "ANCthailand [Code Camp Final Project]",
    web: "https://www.youtube.com/watch?fbclid=IwAR2LIbhz8Q4oUcybn6Relv_Ilz6wGted9UNx0AfnCILriRbJZTfas37iT1w&v=8C2q8LrX8Fg&feature=youtu.be",
    list: [
      { content: "Medical service web application.", link: "" },
      {
        content:
          "This project is an idea of substitute the Antenatal Care part of Thailand Mom&Child book with an online web application.",
        link: ""
      },
      {
        content: "Using React antD ExpressJS Sequelize and cloudinary",
        link: ""
      },
      {
        content: "Software Park Thailand Code Camp final group project.",
        link: ""
      },
      {
        content: "github frontend",
        link: "https://github.com/AuJeedJad/ANC-frontend.git"
      },
      {
        content: "github backend",
        link: "https://github.com/AuJeedJad/MC2H-API.git"
      }
    ]
  },
  {
    year: "2020  -  2021",
    name: "doZalot project [Code Camp Final Project]",
    web: "",
    list: [
      { content: "scrum board master [activity log].", link: "" },
      {
        content: "Using React ExpressJS Sequelize and cloudinary",
        link: ""
      },
      {
        content: "Software Park Thailand Code Camp final personal project.",
        link: ""
      },
      {
        content:
          "github frontend: https://github.com/ZalotBabyZ/do-zalot-frontend.git",
        link: "https://github.com/ZalotBabyZ/do-zalot-frontend.git"
      },
      {
        content:
          "github backend: https://github.com/ZalotBabyZ/do-zalot-backend.git",
        link: "https://github.com/ZalotBabyZ/do-zalot-backend.git"
      }
    ]
  }
];
function ProjectCard() {
  return (
    <div className="card timeline-card">
      <div className="card-head">PROJECT EXPERIENCE</div>
      <div className="card-body">
        <div className="line"></div>
        {project.map((list, listInd) => {
          return (
            <div className="timeline-object" key={listInd}>
              <div className="timeline-point"> </div>
              <div className="timeline-date"> {list.year} </div>
              <div className="timeline-list">
                <div className="list-head--wrap">
                  {list.web ? (
                    <a
                      href={list.web}
                      className="list-subhead"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                {list.list.map((note, ind) => {
                  return (
                    <p key={ind}>
                      <FontAwesomeIcon
                        icon={
                          !!note.link
                            ? "external-link-alt"
                            : "angle-double-right"
                        }
                      />
                      &nbsp;
                      {!note.link ? (
                        <span>{note.content}</span>
                      ) : (
                        <span>
                          <a
                            href={note.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {`${note.content}:  ${note.link}`}
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

export default ProjectCard;
