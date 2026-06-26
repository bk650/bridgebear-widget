import type { Lawyer }
  from "../types/Lawyer";

const API_URL =
  "https://bridgebear-api.bk-025.workers.dev";

export async function getLawyer(
  slug: string
): Promise<Lawyer[]> {

  const response =
    await fetch(
      `${API_URL}/api/lawyer/${slug}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch lawyer."
    );
  }

  const result =
    await response.json();

  if (!result.success) {
    throw new Error(
      result.message ??
      "Lawyer not found."
    );
  }

  return result.data as Lawyer[];
}