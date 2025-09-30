import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Clock, 
  Target,
  Play,
  Zap,
  BookOpen,
  Trophy,
  Settings,
  ChevronRight,
  Star,
  Timer,
  BarChart3
} from "lucide-react"
import Link from "next/link"

export default function StudyModes() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">USMLE NextGen</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/study-modes" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Study Modes
            </Link>
            <Link href="/questions" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Questions
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
            <Link href="/tutor" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              AI Tutor
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Study Mode</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect study method based on your goals, available time, and learning preferences
          </p>
        </div>

        {/* Quick Start Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  PRIORITY
                </div>
              </div>
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl text-red-900">Weakness Focus</CardTitle>
                <CardDescription className="text-red-700">
                  AI-selected questions targeting your weakest areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-800">Nervous System</span>
                    <span className="font-medium text-red-600">68% accuracy</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-800">Questions:</span>
                    <span className="text-red-600">15-20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-800">Time:</span>
                    <span className="text-red-600">30-40 min</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Play className="mr-2 h-4 w-4" />
                  Start Focus Session
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  STREAK
                </div>
              </div>
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl text-green-900">Daily Sprint</CardTitle>
                <CardDescription className="text-green-700">
                  Quick 15-minute session to maintain your streak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Mixed Topics</span>
                    <span className="font-medium text-green-600">All systems</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Questions:</span>
                    <span className="text-green-600">10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Time:</span>
                    <span className="text-green-600">15 min</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Play className="mr-2 h-4 w-4" />
                  Quick Sprint
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  REVIEW
                </div>
              </div>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl text-blue-900">Spaced Review</CardTitle>
                <CardDescription className="text-blue-700">
                  Review concepts using spaced repetition algorithm
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-800">Due Today</span>
                    <span className="font-medium text-blue-600">23 cards</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-800">Topics:</span>
                    <span className="text-blue-600">Cardiology, GI</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-800">Time:</span>
                    <span className="text-blue-600">15-20 min</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <Link href="/flashcards">Start Flashcards</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Study Modes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Study Modes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Practice Modes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Practice Modes</h3>
              
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Timer className="h-8 w-8 text-orange-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Timed Practice</h4>
                        <p className="text-sm text-gray-600">Simulate real exam conditions</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">40 Questions</div>
                      <div className="text-gray-500">Standard Block</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">60 Minutes</div>
                      <div className="text-gray-500">Time Limit</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Mixed</div>
                      <div className="text-gray-500">All Systems</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-purple-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Tutor Mode</h4>
                        <p className="text-sm text-gray-600">Immediate feedback and explanations</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Unlimited</div>
                      <div className="text-gray-500">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">No Limit</div>
                      <div className="text-gray-500">Time</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Custom</div>
                      <div className="text-gray-500">Selection</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Custom Quiz</h4>
                        <p className="text-sm text-gray-600">Build your own practice session</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Your Choice</div>
                      <div className="text-gray-500">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Flexible</div>
                      <div className="text-gray-500">Time</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Filtered</div>
                      <div className="text-gray-500">Topics</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Review & Assessment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review & Assessment</h3>
              
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-8 w-8 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Flashcard Review</h4>
                        <p className="text-sm text-gray-600">Spaced repetition system</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                        23 Due
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">384</div>
                      <div className="text-gray-500">Total Cards</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">23</div>
                      <div className="text-gray-500">Due Today</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">92%</div>
                      <div className="text-gray-500">Retention</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-8 w-8 text-indigo-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Assessment Test</h4>
                        <p className="text-sm text-gray-600">Comprehensive evaluation</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">120</div>
                      <div className="text-gray-500">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">180 Min</div>
                      <div className="text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Full</div>
                      <div className="text-gray-500">Coverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Challenge Mode</h4>
                        <p className="text-sm text-gray-600">Compete with peers</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                        New!
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Weekly</div>
                      <div className="text-gray-500">Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Ranked</div>
                      <div className="text-gray-500">Leaderboard</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">Rewards</div>
                      <div className="text-gray-500">System</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-xl">Study Mode Recommendations</CardTitle>
            </div>
            <CardDescription>Optimize your study sessions for maximum retention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Morning Focus</h4>
                <p className="text-sm text-gray-600">
                  Use timed practice sessions in the morning when your concentration is highest
                </p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Targeted Practice</h4>
                <p className="text-sm text-gray-600">
                  Focus on weak areas identified by our AI for maximum improvement
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Evening Review</h4>
                <p className="text-sm text-gray-600">
                  End your day with flashcard reviews to reinforce learning while you sleep
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}