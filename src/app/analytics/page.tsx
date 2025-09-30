import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Clock, 
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Activity
} from "lucide-react"
import Link from "next/link"

export default function Analytics() {
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
            <Link href="/study-modes" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Study Modes
            </Link>
            <Link href="/questions" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Questions
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Performance Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into your USMLE preparation progress</p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Award className="h-8 w-8 text-blue-600" />
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +12%
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700 mb-1">248</div>
              <div className="text-sm text-blue-600">Predicted USMLE Score</div>
              <div className="text-xs text-blue-500 mt-1">Based on current performance</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Target className="h-8 w-8 text-green-600" />
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +3%
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-1">87%</div>
              <div className="text-sm text-green-600">Overall Accuracy</div>
              <div className="text-xs text-green-500 mt-1">Last 30 days</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Clock className="h-8 w-8 text-purple-600" />
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  -5%
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700 mb-1">2.3</div>
              <div className="text-sm text-purple-600">Avg. Time per Question</div>
              <div className="text-xs text-purple-500 mt-1">Minutes</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Activity className="h-8 w-8 text-orange-600" />
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  +8%
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700 mb-1">78%</div>
              <div className="text-sm text-orange-600">Exam Readiness</div>
              <div className="text-xs text-orange-500 mt-1">AI Assessment</div>
            </CardContent>
          </Card>
        </div>

        {/* Performance by System */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Performance by Organ System</CardTitle>
              <CardDescription>Your accuracy and improvement trends across different systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { 
                    system: "Cardiovascular", 
                    accuracy: 92, 
                    questions: 145, 
                    trend: "+5%", 
                    color: "bg-green-500",
                    status: "excellent"
                  },
                  { 
                    system: "Respiratory", 
                    accuracy: 85, 
                    questions: 120, 
                    trend: "+2%", 
                    color: "bg-blue-500",
                    status: "good"
                  },
                  { 
                    system: "Nervous System", 
                    accuracy: 68, 
                    questions: 89, 
                    trend: "-3%", 
                    color: "bg-red-500",
                    status: "needs-work"
                  },
                  { 
                    system: "Gastrointestinal", 
                    accuracy: 78, 
                    questions: 102, 
                    trend: "+7%", 
                    color: "bg-yellow-500",
                    status: "improving"
                  },
                  { 
                    system: "Endocrine", 
                    accuracy: 74, 
                    questions: 67, 
                    trend: "+1%", 
                    color: "bg-purple-500",
                    status: "average"
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="font-semibold text-gray-800">{item.system}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'excellent' ? 'bg-green-100 text-green-700' :
                          item.status === 'good' ? 'bg-blue-100 text-blue-700' :
                          item.status === 'needs-work' ? 'bg-red-100 text-red-700' :
                          item.status === 'improving' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-sm font-medium ${
                          item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.trend}
                        </span>
                        <span className="text-lg font-bold text-gray-800">{item.accuracy}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>{item.questions} questions attempted</span>
                      <span>Last 30 days</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Study Streak */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Current Study Streak</CardTitle>
                <CardDescription>Consistency is key to success</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
                  <div className="text-sm text-gray-600 mb-4">Days in a row</div>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          i < 12 ? 'bg-orange-400' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">Last 14 days</div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goal */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Weekly Goals</CardTitle>
                <CardDescription>Track your progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Questions Completed</span>
                    <span>127/150</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Study Hours</span>
                    <span>18/20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Flashcard Reviews</span>
                    <span>45/60</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Study Time Analysis</CardTitle>
              <CardDescription>Your daily and weekly study patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-800">Peak Performance Time</div>
                    <div className="text-sm text-blue-600">2:00 PM - 4:00 PM</div>
                  </div>
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-gray-500 mb-1">{day}</div>
                      <div 
                        className="bg-blue-500 rounded-sm mx-auto"
                        style={{ 
                          height: `${Math.random() * 40 + 20}px`, 
                          width: '100%' 
                        }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-1">
                        {Math.floor(Math.random() * 3 + 1)}h
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Improvement Recommendations</CardTitle>
              <CardDescription>AI-powered suggestions for better performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-800 mb-1">Priority Focus</div>
                    <div className="text-sm text-red-700 mb-2">
                      Neuroanatomy scores are 15% below target. Recommend focused review.
                    </div>
                    <Button size="sm" variant="outline" className="border-red-300 text-red-700">
                      Start Neuroanatomy Quiz
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-yellow-800 mb-1">Time Management</div>
                    <div className="text-sm text-yellow-700 mb-2">
                      You&apos;re spending 30% more time than average on cardiology questions.
                    </div>
                    <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-700">
                      Practice Timed Mode
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-800 mb-1">Strong Performance</div>
                    <div className="text-sm text-green-700 mb-2">
                      Excellent progress in cardiovascular system. Consider advanced topics.
                    </div>
                    <Button size="sm" variant="outline" className="border-green-300 text-green-700">
                      Advanced Cardiology
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
            <Link href="/questions">
              <Target className="mr-2 h-5 w-5" />
              Start Targeted Practice
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tutor">
              <Brain className="mr-2 h-5 w-5" />
              Get AI Recommendations
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}