export interface SessionState {
  visitorId: string;

  slug: string;

  scenarioSelector?: string;

  fcAnswer?: string;

  sbAnswers: string[];

  ecAnswer?: string;

  name?: string;
  phone?: string;
  email?: string;

  landingPath: string;
  referralSource: string;
}