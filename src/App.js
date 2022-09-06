import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelopeOpenText,
  faAngleDoubleRight,
  faExternalLinkAlt,
  faUnlink,
  faCircle,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import CertificationCard from "./components/CertificationCard";
import ContactCard from "./components/ContactCard";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import MiniprojectCard from "./components/MiniprojectCard";
import ProfileCard from "./components/ProfileCard";
import SkillCard from "./components/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fab,
  faPhoneAlt,
  faEnvelopeOpenText,
  faAngleDoubleRight,
  faExternalLinkAlt,
  faUnlink,
  faCircle,
  faDownload
);
function App() {
  return (
    <div className="App">
      <a
        href="https://drive.google.com/file/d/1vN2DO-sxCUDv57bjAVxcReoA_LyRRpyW/view?usp=sharing"
        className="print-resume"
      >
        <FontAwesomeIcon icon="download" />
        <div className="print-resume-clue"> pdf download </div>
      </a>
      <div className="page-header">
        <h2 className="page-header-quote">
          NOTHING CAN STOP YOU ONCE YOU HAVE A CLEAR VISION OF WHAT YOU WANT.
        </h2>
      </div>
      <div className="page-container">
        <div className="left-container">
          <ProfileCard />
          <ContactCard />
        </div>
        <div className="right-container">
          <SkillCard />
          <div className="right-container-portion">
            <ExperienceCard />
            <EducationCard />
            <CertificationCard />
            <ProjectCard />
            {/* <MiniprojectCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
