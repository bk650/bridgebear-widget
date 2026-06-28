/*
Text / Number / Single Select → Required by default
Linked Record → Always ?: Type[]
Lookup → Always ?: Type[]
Optional fields → Use ?
*/

export interface WidgetSetting {

  Number: number; // For Organization Purpose
  Client?: string[]; // Linked Record
  Slug?: string[]; // Lookup
  DesktopOffset_X: number; // Number
  DesktopOffset_Y: number; // Number
  MobileOffset_X: number; // Number
  MobileOffset_Y: number; // Number
  WidgetBubble_Duration: number; // Number
  BubbleMsg_1: string; // Text
  BubbleMsg_2?: string; // Text
  ButtonText_AC: string; // Text
  ButtonText_CF: string; // Text
  CF_QuestionText: string; // Text
  CF_Url: string; // Text
  SC_Heading: string; // Text
  SC_Body: string; // Text
}