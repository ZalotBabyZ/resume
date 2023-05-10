import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { IconList } from '../../asset/SVGComponent/svgIcon';
import { TSIcon } from '../../asset/SVGComponent/IconTS';

const skill = [
  {
    group: 'Programming Languages & Web Technologies',
    list: [
      { name: 'HTML5', iconFeb: 'html5' },
      { name: 'CSS3', iconFeb: 'css3-alt' },
      { name: 'JavaScript', iconFeb: 'js-square' },
      { name: 'TypeScript', iconSVG: 'TS' },
      { name: 'Python', iconFeb: 'python' },
    ],
  },
  {
    group: 'JavaScript Libraries & Frameworks',
    list: [
      { name: 'React Native', iconFeb: 'react' },
      { name: 'React JS', iconFeb: 'react' },
      { name: 'Node.js', iconFeb: 'node-js' },
      { name: 'Express.js', iconFeb: '' },
      { name: 'pandas', iconFeb: '' },
    ],
  },
  {
    group: 'Databases & Platforms',
    list: [{ name: ' MySQL', iconSVG: 'SQL' }],
  },
  {
    group: 'Tools & Developer Tools',
    list: [{ name: ' Git', iconFeb: 'git' }],
  },
  {
    group: 'Others',
    list: [
      { name: 'Adobe Illustrator', iconSVG: '' },
      { name: 'Adobe Photoshop', iconSVG: 'PS' },
      { name: 'Adobe Indesign', iconSVG: 'ID' },
    ],
  },
];

function SkillCard() {
  return (
    <div className="card">
      <div className="card-head">TECHNICAL SKILLS</div>
      <div className="card-body skill-body">
        {skill.map((group, ind) => {
          return (
            <div className="skill-group" key={ind}>
              <div className="skill-head"> {group.group} </div>
              {group.list.map((item, ind) => {
                return (
                  <div className="skill-list" key={ind}>
                    <div className="icon">
                      {item.iconFeb ? (
                        <FontAwesomeIcon icon={['fab', item.iconFeb]} />
                      ) : item.iconFA ? (
                        <FontAwesomeIcon icon={item.iconFA} />
                      ) : item.iconSVG ? (
                        IconList('var(--primaryLight-color)', 20)[item.iconSVG]
                      ) : (
                        <FontAwesomeIcon icon="circle" />
                      )}
                    </div>
                    <div className="skill-content">{item.name}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
