import { InitialSession } from "../state/SessionStore";
import { getSlug } from "./Slug";
import { getReferralSource } from "./Referral";

export function createSession() {

  return {

    ...InitialSession,

    Slug:
      getSlug(),

    LandingPath:
      window.location.href,

    ReferralSource:
      getReferralSource(),
  };
}