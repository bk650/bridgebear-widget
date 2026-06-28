/*
Text / Number / Single Select → Required by default
Linked Record → Always ?: Type[]
Lookup → Always ?: Type[]
Optional fields → Use ?
*/

export interface Lawyer {
  
  Name: string; // Text
  Rank: string; // Text
  Description: string; // Text
  ProfileImg?: {
    id: string;
    url: string;
    filename: string;
  }[]; // Attachment
  Client?: string[]; // Linked Record
  Slug?: string[]; // Lookup
  Assigned_Widget: boolean; // Boolean
  Assigned_Question?: string[]; // Linked Record
  Assigned_Question_QID?: string[]; // Lookup
  Assigned_Question_Count: number; // Formula
}