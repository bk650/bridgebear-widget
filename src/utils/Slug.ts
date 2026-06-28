/*
Every BridgeBear widget instance must have exactly one slug.
The slug identifies the client and determines which data should be loaded from Airtable.
DEV: Return hardcoded slug.
PROD: Read slug from script[data-slug].
*/

export function getSlug(): string {

  if (
    import.meta.env.DEV
  ) {
    return "bridgebear";
  }

  const script =
    document.querySelector(
      "script[data-bridgebear-slug]"
    );

  const slug =
    script?.getAttribute(
      "data-bridgebear-slug"
    );

  if (!slug) {
    throw new Error(
      "bridgeBear slug is required."
    );
  }

  return slug;
}