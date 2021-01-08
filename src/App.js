import './App.css';
import CertificationCard from './components/CertificationCard';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import MiniprojectCard from './components/MiniprojectCard';
import PhotoCard from './components/PhotoCard';
import ProfileCard from './components/ProfileCard';
import SkillCard from './components/SkillCard';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="left-container">
          <PhotoCard />
          <SkillCard />
          <ContactCard />
        </div>
        <div className="right-container">
          <ProfileCard />
          <ProjectCard />
          <MiniprojectCard />
          <ExperienceCard />
          <EducationCard />
          <CertificationCard />
        </div>
      </div>
    </div>
  );
}

export default App;
