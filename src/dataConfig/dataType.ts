export interface IPersonalInfo {
  fullName: string;
  role: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  photoUrl?: { photo: string; classOverride?: string };
}

export interface ICompetency {
  id: string;
  category: string;
  skills: string[];
  isA4: boolean; 
  A4Position?: "side" | "body";
}

export interface IExperienceHighlight {
  id: string;
  title: string;
  description: string;
}

export interface IExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  highlights: IExperienceHighlight[];
}

export interface IEducation {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  majorOrDescription?: string;
}

export interface IResumeConfig {
  personalInfo: IPersonalInfo;
  professionalSummary: string;
  competencies: ICompetency[];
  experiences: IExperience[];
  educations: IEducation[];
}