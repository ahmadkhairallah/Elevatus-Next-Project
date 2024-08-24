export interface IResponse<T> {
  message: string;
  statusCode?: number;
  results?: T;
  dateTime?: DateTime;
  errors?: Record<string, string>;
}

export interface JobsResults {
  jobs: IJob[];
  total?: number;
  limit?: number;
  page?: number;
  pages?: number;
}

export interface IJob {
  uuid: string;
  title: string;
  company_uuid: string;
  url: string;
  is_top: boolean;
  gpa: number;
  years_of_experience: number[];
  geolocation: Geolocation;
  willing_to_travel: boolean;
  willing_to_relocate: boolean;
  owns_a_car: boolean;
  visa_sponsorship: boolean;
  salary: Salary;
  gender: string;
  description: string;
  requirements: string;
  translations: any[];
  skills: string[];
  uri: string;
  posted_at: string;
  score: number;
  is_applied: boolean;
  applied_at: any;
  outside: boolean;
  has_profile: boolean;
  outside_key: any;
  hidden_columns: any[];
  job_type: string[];
  degree: string[];
  industry: string[];
  major: string[];
  nationality: string[];
  career_level: string[];
  languages: Language[];
  location: Location;
  category: string[];
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface Salary {
  min: number;
  max: number;
}

export interface Language {
  en?: number;
  ar?: number;
}

export interface Location {
  city: string;
  country: string;
}

export interface DateTime {
  date: string;
  timezone_type: number;
  timezone: string;
}
