import type { Answer }
  from "../types/Answer";

const API_URL =
  "https://bridgebear-api.bk-025.workers.dev";

export async function getAnswer(
  slug: string
): Promise<Answer[]> {

  const response =
    await fetch(
      `${API_URL}/api/answer/${slug}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch answer."
    );
  }

  const result =
    await response.json();

  if (!result.success) {
    throw new Error(
      result.message ??
      "Answer not found."
    );
  }

  return result.data as Answer[];
}