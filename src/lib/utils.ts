import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function calculateReadinessScore(
  correctAnswers: number,
  totalAnswers: number,
  studyTimeHours: number,
  conceptsMastered: number,
  totalConcepts: number
): number {
  if (totalAnswers === 0) return 0
  
  const accuracyScore = (correctAnswers / totalAnswers) * 40
  const timeScore = Math.min(studyTimeHours / 100, 1) * 30
  const masteryScore = (conceptsMastered / totalConcepts) * 30
  
  return Math.round(accuracyScore + timeScore + masteryScore)
}

export function getSpacedRepetitionInterval(
  difficulty: number,
  repetition: number,
  easinessFactor: number
): number {
  if (repetition === 0) return 1
  if (repetition === 1) return 6
  
  return Math.round(
    getSpacedRepetitionInterval(difficulty, repetition - 1, easinessFactor) * easinessFactor
  )
}

export function updateEasinessFactor(
  currentEF: number,
  quality: number
): number {
  return Math.max(
    1.3,
    currentEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  )
}