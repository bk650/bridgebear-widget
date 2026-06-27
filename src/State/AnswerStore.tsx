import { getAnswer }
  from "../api/Answer";

import type { Answer }
  from "../types/Answer";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface AnswerStoreType {

  answers: Answer[];

  setAnswers: (
    answers: Answer[]
  ) => void;

  loadAnswer: (
    slug: string
  ) => Promise<void>;
}

const AnswerStoreContext =
  createContext<
    AnswerStoreType | null
  >(null);

interface AnswerStoreProviderProps {
  children: ReactNode;
}

export function AnswerStoreProvider({
  children,
}: AnswerStoreProviderProps) {

  const [answers,
    setAnswers] =
      useState<Answer[]>([]);

  const loadAnswer =
    useCallback(
      async (slug: string) => {

        const data =
          await getAnswer(
            slug
          );

        setAnswers(
          data
        );
      },
      []
    );

  return (
    <AnswerStoreContext.Provider
      value={{
        answers,
        setAnswers,
        loadAnswer,
      }}
    >
      {children}
    </AnswerStoreContext.Provider>
  );
}

export function useAnswerStore() {

  const context =
    useContext(
      AnswerStoreContext
    );

  if (!context) {
    throw new Error(
      "useAnswerStore must be used inside AnswerStoreProvider."
    );
  }

  return context;
}