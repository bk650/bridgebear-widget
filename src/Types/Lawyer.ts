export interface Lawyer {
  
  Name: string;

  Rank: string;

  Description: string;

  ProfileImg: {
    id: string;
    url: string;
    filename: string;
  }[];

  Client: string[]; // Airtable linked record ids

  Slug: string[]; // Airtable lookup field

  Assigned_Widget?: boolean;

  Assigned_Question: string[]; // Airtable linked record ids

  Assigned_Question_QID: string[]; // Airtable Lookup field

  Assigned_Question_Count: number; // Airtable formula field
}