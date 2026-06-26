import type { WidgetSetting } from "../Types/WidgetSetting";

const API_URL = "https://bridgebear-api.bk-025.workers.dev";

export async function getWidgetSetting(
  slug: string
): Promise<WidgetSetting> {
  
  const response = await fetch(
    `${API_URL}/api/widgetsetting/${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch widget setting.");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message ?? "Widget setting not found."
    );
  }

  return result.data as WidgetSetting;
}