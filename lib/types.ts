export interface Project {
  id: string;
  publishedDate: string;
  status: string;
  title: string;
  tags: string[];
  description: string;
  urls: Record<string, string> | null;
  website: string | null;
  img: string | null;
  imgAlt: string | null;
  pinned: boolean;
  sortOrder: number | null;
}

export interface Job {
  id: string;
  status: string;
  startDate: string;
  finishDate: string | null;
  title: string;
  companyName: string;
  description: string;
  location: string;
}
