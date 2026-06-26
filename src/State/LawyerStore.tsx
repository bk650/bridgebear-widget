import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import { getLawyer } from "../api/Lawyer";
import type { Lawyer } from "../types/Lawyer";

interface LawyerStoreType {
  lawyers: Lawyer[];

  setLawyers: (
    lawyers: Lawyer[]
  ) => void;

  loadLawyer: (
    slug: string
  ) => Promise<void>;
}

const LawyerStoreContext =
  createContext<LawyerStoreType | null>(
    null
  );

interface LawyerStoreProviderProps {
  children: ReactNode;
}

export function LawyerStoreProvider({
  children,
}: LawyerStoreProviderProps) {
  const [lawyers, setLawyers] =
    useState<Lawyer[]>([]);

  const loadLawyer = useCallback(
    async (slug: string) => {
      const data =
        await getLawyer(slug);

      setLawyers(data);
    },
    []
  );

  return (
    <LawyerStoreContext.Provider
      value={{
        lawyers,
        setLawyers,
        loadLawyer,
      }}
    >
      {children}
    </LawyerStoreContext.Provider>
  );
}

export function useLawyerStore() {
  const context =
    useContext(
      LawyerStoreContext
    );

  if (!context) {
    throw new Error(
      "useLawyerStore must be used inside LawyerStoreProvider."
    );
  }

  return context;
}