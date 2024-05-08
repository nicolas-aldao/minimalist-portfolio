export interface CV {
  sections: Sections;
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  publications: Array<Publications>;
  skills: Array<string>;
  languages: Array<string>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

interface Sections {
  about: string;
  work: string;
  education: string;
  skills: string;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  city: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: Highlight;
}

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: Highlight;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  studyType: string;
  startDate?: string;
  endDate: string;
  hours: string;
  description: string;
  courses: Array<string>;
}

interface Languages {
  language: string;
  fluency: string;
}

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Highlight = Array<String>;
