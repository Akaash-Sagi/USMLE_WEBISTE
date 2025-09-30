import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Questions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-foreground">USMLE NextGen</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Question Bank</h1>
          <p className="text-gray-600 mt-2">Practice with our comprehensive USMLE question collection</p>
        </div>

        {/* Quick Start Options */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-600">Quick Practice</CardTitle>
              <CardDescription>
                AI-selected questions based on your weak areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">20 questions</p>
                  <p className="text-sm text-gray-600">Mixed difficulty</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-green-200">
            <CardHeader>
              <CardTitle className="text-green-600">Timed Practice</CardTitle>
              <CardDescription>
                Simulate real exam conditions with time pressure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">40 questions</p>
                  <p className="text-sm text-gray-600">60 minutes</p>
                </div>
                <Clock className="h-5 w-5 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-600">Custom Quiz</CardTitle>
              <CardDescription>
                Create a personalized quiz with your preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Customizable</p>
                  <p className="text-sm text-gray-600">Your choice</p>
                </div>
                <ArrowRight className="h-5 w-5 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Options */}
        <Card>
          <CardHeader>
            <CardTitle>Filter Questions</CardTitle>
            <CardDescription>Customize your practice session</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium mb-2 block">USMLE Step</label>
                <select className="w-full p-2 border rounded-md">
                  <option>All Steps</option>
                  <option>Step 1</option>
                  <option>Step 2 CK</option>
                  <option>Step 3</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Organ System</label>
                <select className="w-full p-2 border rounded-md">
                  <option>All Systems</option>
                  <option>Cardiovascular</option>
                  <option>Respiratory</option>
                  <option>Nervous System</option>
                  <option>Gastrointestinal</option>
                  <option>Endocrine</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Difficulty</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Mixed</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button className="flex-1">Start Custom Quiz</Button>
              <Button variant="outline">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>

        {/* Sample Question Preview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Sample Question</CardTitle>
            <CardDescription>Preview of question format</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-800">
                A 45-year-old man presents with chest pain, shortness of breath, and diaphoresis. 
                His ECG shows ST-elevation in leads II, III, and aVF. Which coronary artery is most likely affected?
              </p>
              
              <div className="space-y-2">
                <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  A) Left anterior descending artery
                </div>
                <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  B) Right coronary artery
                </div>
                <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  C) Left circumflex artery
                </div>
                <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  D) Posterior descending artery
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> Cardiovascular • Step 1 • Medium
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}