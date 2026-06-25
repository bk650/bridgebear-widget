import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { getWidgetSetting } from "../api/widget";
import type { WidgetSetting } from "../Types/WidgetSetting";

interface WidgetSettingStoreType {
  widgetSetting: WidgetSetting | null;

  setWidgetSetting: (
    setting: WidgetSetting
  ) => void;

  loadWidgetSetting: (
    slug: string
  ) => Promise<void>;
}

const WidgetSettingStoreContext =
  createContext<WidgetSettingStoreType | null>(
    null
  );

interface WidgetSettingStoreProviderProps {
  children: ReactNode;
}

export function WidgetSettingStoreProvider({
  children,
}: WidgetSettingStoreProviderProps) {
  const [widgetSetting, setWidgetSetting] =
    useState<WidgetSetting | null>(null);

  async function loadWidgetSetting(
    slug: string
  ) {
    const data =
      await getWidgetSetting(slug);

    setWidgetSetting(data);
  }

  return (
    <WidgetSettingStoreContext.Provider
      value={{
        widgetSetting,
        setWidgetSetting,
        loadWidgetSetting,
      }}
    >
      {children}
    </WidgetSettingStoreContext.Provider>
  );
}

export function useWidgetSettingStore() {
  const context = useContext(
    WidgetSettingStoreContext
  );

  if (!context) {
    throw new Error(
      "useWidgetSettingStore must be used inside WidgetSettingStoreProvider."
    );
  }

  return context;
}