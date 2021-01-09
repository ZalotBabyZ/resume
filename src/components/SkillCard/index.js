import React from 'react';
import './style.css';

const skill = [
  {
    group: 'LANGUAGE [PROGRAMMING & MARKUP]',
    list: [
      { name: 'HTML', percent: '80%' },
      { name: 'CSS', percent: '80%' },
      { name: 'JavaScript', percent: '90%' },
      { name: 'SQL', percent: '60%' },
      { name: 'Python', percent: '70%' },
    ],
  },
  {
    group: 'FRAMEWORK & LIBRARY',
    list: [
      { name: 'REACT', percent: '90%' },
      { name: 'ExpressJS', percent: '70%' },
      { name: 'AXIOS', percent: '70%' },
      { name: 'SEQUELIZE', percent: '60%' },
      { name: 'CLOUDINARY', percent: '60%' },
      { name: 'PANDAS', percent: '40%' },
    ],
  },
  {
    group: 'OTHERS',
    list: [
      { name: 'GIT HUB', percent: '70%' },
      { name: 'ADOBE ILLUSTRATOR', percent: '60%' },
      { name: 'ADOBE PHOTOSHOP', percent: '60%' },
    ],
  },
];

function SkillCard() {
  return (
    <div className="card">
      <div className="card-head">SKILL</div>
      <div className="card-body"></div>
    </div>
  );
}

export default SkillCard;
