export interface Question {

  
  QID: string; // Formula
  Type: string; // Single Select
  SB_Order?: string; // Single Select
  Client?: string[]; // Linked Record
  Slug?: string[]; // Lookup
  QuestionText: string; // Text 
  CommentText?: string; // Text
}