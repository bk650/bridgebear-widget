/*
Text / Number / Single Select → Required by default
Linked Record → Always ?: Type[]
Lookup → Always ?: Type[]
Optional fields → Use ?
*/

export interface Answer {

  AnswerText: string; // Text
  Client?: string[]; // Linked Record
  Slug?: string[]; // Lookup
  Type: string; // Single Select
  QID?: string[]; // Linked Record
  QID_Value?: string[]; // Lookup
  Order: number; // Number
  ScenarioSelector?: string; // Text
}