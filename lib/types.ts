export interface Project {
  id: string;
  publishedDate: string;
  title: string;
  tags: string[];
  description: string;
  urls: Record<string, string>;
  website: string | null;
}

export interface Job {
  id: string;
  startDate: string;
  finishDate: string | null;
  title: string;
  companyName: string;
  description: string;
  location: string;
}
