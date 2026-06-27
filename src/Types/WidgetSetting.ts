export interface WidgetSetting {
  
  // Basic
  Number: number; // For Organization Purpose
  Client: string[]; // Linked Record
  Slug?: string[]; // Lookup

  // Widget Position
  DesktopOffset_X: number;
  DesktopOffset_Y: number;
  MobileOffset_X: number;
  MobileOffset_Y: number;

  // WidgetBubble
  WidgetBubble_Duration: number;
  BubbleMsg_1: string; // Text
  BubbleMsg_2?: string; // Text

  // Buttons
  ButtonText_AC: string; // Text
  ButtonText_CF: string; // Text

  // Contact Form
  CF_QuestionText: string; // Text
  CF_Url: string; // Text

  // Submit Complete
  SC_Heading: string; // Text
  SC_Body: string; // Text
}