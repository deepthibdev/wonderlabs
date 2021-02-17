export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface  Page {
  data: User[];
  page: number;
  total_pages: number;
}
