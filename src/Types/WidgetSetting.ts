export interface WidgetSetting {
  
  // Basic
  Number: number;
  Client: string[]; // Airtable linked record ids
  Slug: string;

  // Widget Position
  DesktopOffset_X: number;
  DesktopOffset_Y: number;
  MobileOffset_X: number;
  MobileOffset_Y: number;

  // WidgetBubble
  WidgetBubble_Duration: number;
  BubbleMsg_1: string;
  BubbleMsg_2?: string;

  // Buttons
  ButtonText_AC: string;
  ButtonText_CF: string;

  // Contact Form
  CF_QuestionText: string;
  CF_Url: string;

  // Submit Complete
  SC_Heading: string;
  SC_Body: string;
}