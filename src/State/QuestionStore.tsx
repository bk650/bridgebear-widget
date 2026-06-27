import { getQuestion } from "../api/Question";
import type { Question } from "../types/Question";
import { createContext, useContext, useState, useCallback, type ReactNode, } from "react";

interface QuestionStoreType {

  questions: Question[];

  setQuestions: (
    questions: Question[]
  ) => void;

  loadQuestion: (
    slug: string
  ) => Promise<void>;
}

const QuestionStoreContext =
  createContext<
    QuestionStoreType | null
  >(null);

interface QuestionStoreProviderProps {
  children: ReactNode;
}

export function QuestionStoreProvider({
  children,
}: QuestionStoreProviderProps) {

  const [questions,
    setQuestions] =
      useState<Question[]>([]);

  const loadQuestion =
    useCallback(
      async (slug: string) => {

        const data =
          await getQuestion(
            slug
          );

        setQuestions(
          data
        );
      },
      []
    );

  return (
    <QuestionStoreContext.Provider
      value={{
        questions,
        setQuestions,
        loadQuestion,
      }}
    >
      {children}
    </QuestionStoreContext.Provider>
  );
}

export function useQuestionStore() {

  const context =
    useContext(
      QuestionStoreContext
    );

  if (!context) {
    throw new Error(
      "useQuestionStore must be used inside QuestionStoreProvider."
    );
  }

  return context;
}