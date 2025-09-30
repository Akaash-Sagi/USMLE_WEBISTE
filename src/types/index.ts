export interface User {
  id: string
  email: string
  name: string
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface Question {
  id: string
  content: string
  options: QuestionOption[]
  correctOptionId: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  step: 'step1' | 'step2ck' | 'step3'
  organSystem: OrganSystem
  subject: Subject
  tags: string[]
  hasVideoExplanation: boolean
  videoUrl?: string
  conceptIds: string[]
  createdAt: Date
  updatedAt: Date
}

export interface QuestionOption {
  id: string
  content: string
  isCorrect: boolean
}

export interface QuestionAttempt {
  id: string
  userId: string
  questionId: string
  selectedOptionId: string
  isCorrect: boolean
  timeSpent: number
  attemptedAt: Date
}

export interface Concept {
  id: string
  name: string
  description: string
  organSystem: OrganSystem
  subject: Subject
  masteryLevel: 'not_learned' | 'learning' | 'reviewing' | 'mastered'
  lastReviewed?: Date
  nextReview?: Date
  repetitions: number
  easinessFactor: number
}

export interface FlashCard {
  id: string
  conceptId: string
  front: string
  back: string
  difficulty: number
  repetitions: number
  easinessFactor: number
  nextReview: Date
  lastReviewed?: Date
}

export interface StudySession {
  id: string
  userId: string
  type: 'quiz' | 'flashcards' | 'tutor'
  startTime: Date
  endTime?: Date
  questionsAnswered: number
  correctAnswers: number
  focusAreas: string[]
}

export interface UserProgress {
  id: string
  userId: string
  step: 'step1' | 'step2ck' | 'step3'
  totalQuestions: number
  correctAnswers: number
  studyTimeMinutes: number
  conceptsMastered: number
  readinessScore: number
  weakAreas: string[]
  strongAreas: string[]
  lastUpdated: Date
}

export interface AITutorMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  questionId?: string
  conceptId?: string
}

export interface AITutorSession {
  id: string
  userId: string
  messages: AITutorMessage[]
  startTime: Date
  endTime?: Date
  topic?: string
  questionId?: string
}

export type OrganSystem = 
  | 'cardiovascular'
  | 'respiratory'
  | 'gastrointestinal'
  | 'genitourinary'
  | 'endocrine'
  | 'hematologic'
  | 'musculoskeletal'
  | 'nervous'
  | 'immune'
  | 'integumentary'
  | 'reproductive'

export type Subject = 
  | 'anatomy'
  | 'physiology'
  | 'pathology'
  | 'pharmacology'
  | 'microbiology'
  | 'immunology'
  | 'biochemistry'
  | 'genetics'
  | 'behavioral_science'
  | 'biostatistics'
  | 'ethics'

export interface QuizSettings {
  step: 'step1' | 'step2ck' | 'step3'
  organSystems: OrganSystem[]
  subjects: Subject[]
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed'
  questionCount: number
  timeLimit?: number
  mode: 'timed' | 'tutor' | 'practice'
  focusOnWeakAreas: boolean
}

export interface AnalyticsDashboard {
  overallProgress: {
    questionsAnswered: number
    accuracy: number
    studyTime: number
    readinessScore: number
  }
  performanceBySystem: Array<{
    system: OrganSystem
    accuracy: number
    questionsAnswered: number
    timeSpent: number
  }>
  performanceBySubject: Array<{
    subject: Subject
    accuracy: number
    questionsAnswered: number
    timeSpent: number
  }>
  weeklyProgress: Array<{
    week: string
    questionsAnswered: number
    accuracy: number
    studyTime: number
  }>
  predictiveInsights: {
    estimatedExamDate: Date
    recommendedDailyQuestions: number
    focusAreas: string[]
    strengthAreas: string[]
  }
}