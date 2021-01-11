import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneAlt,
  faEnvelopeOpenText,
  faAngleDoubleRight,
  faExternalLinkAlt,
  faUnlink,
  faCircle,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import CertificationCard from './components/CertificationCard';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import MiniprojectCard from './components/MiniprojectCard';
import ProfileCard from './components/ProfileCard';
import SkillCard from './components/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faPhoneAlt, faEnvelopeOpenText, faAngleDoubleRight, faExternalLinkAlt, faUnlink, faCircle, faDownload);
function App() {
  return (
    <div className="App">
      <a
        href="https://drive.google.com/file/d/1CqRMUDxXKcUBRdZF9b7OwuVZmtYcbtja/view?usp=sharing"
        className="print-resume"
      >
        <FontAwesomeIcon icon="download" />
        <div className="print-resume-clue"> pdf download </div>
      </a>
      <div className="page-header">
        <h2>NOTHING CAN STOP YOU ONCE YOU HAVE A CLEAR VISION OF WHAT YOU WANT.</h2>
      </div>
      <div className="page-container">
        <div className="left-container">
          <ProfileCard />
          <ContactCard />
        </div>
        <div className="right-container">
          <div className="right-container-portion">
            <SkillCard />
            <ProjectCard />
            <ExperienceCard />
          </div>
          <EducationCard />
          <CertificationCard />
          <MiniprojectCard />
        </div>
      </div>
    </div>
  );
}

export default App;
