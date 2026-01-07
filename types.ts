
export interface JobSector {
  id: string;
  title: string;
  description: string;
  roadmap: string[];
  requirements: string[];
  salary: string; // in Rupees
  category: string;
  icon: string;
}

export interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  degree: string;
  dob: string;
  passedOutYear: string;
  profilePic?: string;
}

export type View = 'auth' | 'home' | 'quiz' | 'explore' | 'profile';
