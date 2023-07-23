export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  department: string;
  sub_departments: string[];
}

export interface Check {
  handleChange1: React.ChangeEvent<HTMLInputElement>;
  handleChange2: React.ChangeEvent<HTMLInputElement>;
  handleChange3: React.ChangeEvent<HTMLInputElement>;
}
