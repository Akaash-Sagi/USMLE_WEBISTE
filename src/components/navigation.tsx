import Link from "next/link"
import { Brain } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

interface NavigationProps {
  currentPage: 'dashboard' | 'study-modes' | 'questions' | 'analytics' | 'tutor' | 'flashcards'
}

export function Navigation({ currentPage }: NavigationProps) {
  const navItems = [
    { href: '/dashboard', label: 'Dashboard', key: 'dashboard' },
    { href: '/study-modes', label: 'Study Modes', key: 'study-modes' },
    { href: '/questions', label: 'Questions', key: 'questions' },
    { href: '/analytics', label: 'Analytics', key: 'analytics' },
    { href: '/tutor', label: 'AI Tutor', key: 'tutor' },
    { href: '/flashcards', label: 'Flashcards', key: 'flashcards' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">USMLE NextGen</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Home
          </Link>
          {navItems.map((item) => (
            <Link 
              key={item.key}
              href={item.href} 
              className={`text-sm font-medium ${
                currentPage === item.key 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}