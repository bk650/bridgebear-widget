/*
Text / Number / Single Select → Required by default
Linked Record → Always ?: Type[]
Lookup → Always ?: Type[]
Optional fields → Use ?
*/

export interface Question {

  QID: string; // Formula
  Type: string; // Single Select
  SB_Order: string; // Single Select
  Client?: string[]; // Linked Record
  Slug?: string[]; // Lookup
  QuestionText: string; // Text 
  CommentText?: string; // Text
}