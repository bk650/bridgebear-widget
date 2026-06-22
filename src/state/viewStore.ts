import { useState } from "react";
import type { ViewType } from "../types/view";

export function useViewStore() {
  const [currentView, setCurrentView] =
    useState<ViewType>("WIDGET_PROFILE");

  return {
    currentView,
    setCurrentView,
  };
}