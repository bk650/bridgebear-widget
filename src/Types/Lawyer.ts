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

  Assigned_Question: string[]; // Airtable linked record ids

  Assigned_Question_Count: number; // Airtable formula field
}