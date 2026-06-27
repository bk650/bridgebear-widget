import type { Question }
  from "../types/Question";

const API_URL =
  "https://bridgebear-api.bk-025.workers.dev";

export async function getQuestion(
  slug: string
): Promise<Question[]> {

  const response =
    await fetch(
      `${API_URL}/api/question/${slug}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch question."
    );
  }

  const result =
    await response.json();

  if (!result.success) {
    throw new Error(
      result.message ??
      "Question not found."
    );
  }

  return result.data as Question[];
}