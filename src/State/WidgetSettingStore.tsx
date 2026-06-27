import { getWidgetSetting } from "../api/Widget";
import type { WidgetSetting } from "../types/WidgetSetting";
import { createContext, useContext, useState, useCallback, type ReactNode, } from "react";

interface WidgetSettingStoreType {
  widgetSetting: WidgetSetting | null;
  setWidgetSetting: (setting: WidgetSetting) => void;
  loadWidgetSetting: (slug: string) => Promise<void>;
}

const WidgetSettingStoreContext = createContext<WidgetSettingStoreType | null>(null);

interface WidgetSettingStoreProviderProps {
  children: ReactNode;
}

export function WidgetSettingStoreProvider({
  children,
}: WidgetSettingStoreProviderProps) {
  
  const [widgetSetting, setWidgetSetting] =
    useState<WidgetSetting | null>(null);

  const loadWidgetSetting = useCallback(
    async (slug: string) => {
      const data = await getWidgetSetting(slug);
      setWidgetSetting(data);
    },
    []
  );

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