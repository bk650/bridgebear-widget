export interface Lawyer {
  
  Name: string;
  Rank: string;
  Description: string;
  ProfileImg: {
    id: string;
    url: string;
    filename: string;
  }[];
  Client: string[]; // Linked record
  Slug: string[]; // Lookup
  Assigned_Widget?: boolean;
  Assigned_Question: string[]; // Linked record
  Assigned_Question_QID: string[]; // Lookup
  Assigned_Question_Count: number; // Formula
}