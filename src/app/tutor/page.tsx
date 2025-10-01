"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useDashboardAccess } from "@/context/DashboardAccessContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Brain, Send, MessageCircle, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Tutor() {
  const { hasVisitedDashboard } = useDashboardAccess();
  const router = useRouter();

  useEffect(() => {
    if (!hasVisitedDashboard) {
      router.replace("/dashboard");
    }
  }, [hasVisitedDashboard, router]);

  if (!hasVisitedDashboard) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Redirecting to Dashboard...</h2>
          <p className="text-muted-foreground">Please visit the dashboard first to access AI Tutor.</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-gray-900">MedInsight AI Tutor</h1>
          <p className="text-gray-600 mt-2">Your 24/7 personalized medical learning companion</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <CardTitle>Chat with MedInsight</CardTitle>
                </div>
                <CardDescription>
                  Ask questions, get hints, or explore medical concepts
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Brain className="h-8 w-8 text-blue-600 bg-blue-100 p-1 rounded-full" />
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">
                        Hello! I&apos;m MedInsight, your AI tutor. I&apos;m here to help you understand 
                        complex medical concepts using Socratic questioning. What would you like to explore today?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">
                        Can you help me understand why someone with renal disease might develop anemia?
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Brain className="h-8 w-8 text-blue-600 bg-blue-100 p-1 rounded-full" />
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">
                        Great question! Let&apos;s think through this step by step. First, what do you know 
                        about the kidney&apos;s role in red blood cell production? What hormone comes to mind?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ask a question or request a hint..."
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Get a hint
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Explain concept
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  Bridge concepts
                </Button>
              </CardContent>
            </Card>

            {/* Suggested Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suggested Topics</CardTitle>
                <CardDescription>Based on your weak areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border border-red-200 cursor-pointer hover:bg-red-100">
                  <p className="text-sm font-medium text-red-800">Neurological Pathways</p>
                  <p className="text-xs text-red-600">You&apos;ve struggled with these concepts</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 cursor-pointer hover:bg-yellow-100">
                  <p className="text-sm font-medium text-yellow-800">Cardiac Pharmacology</p>
                  <p className="text-xs text-yellow-600">Review recommended</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-100">
                  <p className="text-sm font-medium text-blue-800">Renal Physiology</p>
                  <p className="text-xs text-blue-600">Build on your strengths</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What I Can Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Provide Socratic hints without giving away answers</li>
                  <li>• Explain complex concepts with analogies</li>
                  <li>• Bridge connections between topics</li>
                  <li>• Diagnose misconceptions in your reasoning</li>
                  <li>• Offer targeted remediation lessons</li>
                  <li>• Generate custom practice questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}