import { create } from 'zustand'
import { User, Question, UserProgress, AITutorSession, QuizSettings } from '@/types'

interface AuthState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
}

interface QuestionState {
  currentQuestion: Question | null
  questionHistory: Question[]
  currentQuizSettings: QuizSettings | null
  setCurrentQuestion: (question: Question | null) => void
  addToHistory: (question: Question) => void
  setQuizSettings: (settings: QuizSettings) => void
  clearHistory: () => void
}

interface ProgressState {
  userProgress: UserProgress | null
  setUserProgress: (progress: UserProgress) => void
  updateReadinessScore: (score: number) => void
}

interface TutorState {
  currentSession: AITutorSession | null
  isTyping: boolean
  setCurrentSession: (session: AITutorSession | null) => void
  setIsTyping: (typing: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
}))

export const useQuestionStore = create<QuestionState>((set) => ({
  currentQuestion: null,
  questionHistory: [],
  currentQuizSettings: null,
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  addToHistory: (question) => 
    set((state) => ({ 
      questionHistory: [...state.questionHistory, question] 
    })),
  setQuizSettings: (settings) => set({ currentQuizSettings: settings }),
  clearHistory: () => set({ questionHistory: [] }),
}))

export const useProgressStore = create<ProgressState>((set) => ({
  userProgress: null,
  setUserProgress: (progress) => set({ userProgress: progress }),
  updateReadinessScore: (score) =>
    set((state) => ({
      userProgress: state.userProgress
        ? { ...state.userProgress, readinessScore: score }
        : null,
    })),
}))

export const useTutorStore = create<TutorState>((set) => ({
  currentSession: null,
  isTyping: false,
  setCurrentSession: (session) => set({ currentSession: session }),
  setIsTyping: (typing) => set({ isTyping: typing }),
}))