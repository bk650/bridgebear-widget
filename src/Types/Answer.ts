export interface Answer {

  // Text
  AnswerText: string;

  // Linked Record
  Client?: string[];

  // Lookup
  Slug?: string[];

  // Single Select
  Type: string;

  // Linked Record
  QID?: string[];

  // Lookup
  QID_Value?: string[];

  // Number
  Order: number;

  // Text
  ScenarioSelector: string;
}