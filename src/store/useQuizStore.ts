import { create } from "zustand";

interface QuizSelections {
  educationLevel: string;
  language: string;
  noOfQuestions: number;
  questionType: string;
  quizOption: string;
  textArea: string;
}

interface QuizData {
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  selectedAnswer: string;
}

interface QuizState {
  loading: boolean;
  error: string | null;
  message: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setMessage: (message: string | null) => void;
  submitCreateQuiz: (formData: {
    userId: string;
    quizSelections: QuizSelections;
    quizData: QuizData[];
    score: number;
  }) => Promise<void>;
}

export const useQuizStore = create<QuizState>((set) => ({
  loading: false,
  error: null,
  message: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setMessage: (message) => set({ message }),
  submitCreateQuiz: async (formData) => {
    set({ loading: true, error: null, message: null });
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        set({ error: errorData.error, loading: false });
        return;
      }

      const result = await response.json();
      set({ message: result.message, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
