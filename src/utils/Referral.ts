export function getReferralSource(): string {

  const referrer =
    document.referrer;

  if (!referrer) {
    return "direct";
  }

  if (
    referrer.includes(
      "google"
    )
  ) {
    return "google";
  }

  if (
    referrer.includes(
      "naver"
    )
  ) {
    return "naver";
  }

  if (
    referrer.includes(
      "youtube"
    )
  ) {
    return "youtube";
  }

  if (
    referrer.includes(
      "facebook"
    )
  ) {
    return "facebook";
  }

  if (
    referrer.includes(
      "instagram"
    )
  ) {
    return "instagram";
  }

  return "direct";
}