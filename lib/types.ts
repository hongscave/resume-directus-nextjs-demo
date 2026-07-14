export interface Project {
  id: string; // UUID
  publishedDate: Date;
  title: string;
  tags: string[];
  description: string;
  urls: Record<string, string>; // android, app store, website
  website: string | null;
}

export interface Job {
  id: string;
  startDate: Date;
  finishDate: Date | null; // null means current
  title: string;
  companyName: string;
  description: string;
  location: string;
}