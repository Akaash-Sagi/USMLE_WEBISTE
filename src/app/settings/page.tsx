import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { 
  Brain, 
  User,
  Bell,
  Shield,
  Database,
  Download,
  Trash2,
  Globe,
  Clock,
  ArrowLeft,
  Save,
  RefreshCw
} from "lucide-react"

export default function Settings() {
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
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/study-modes" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Study Modes
            </Link>
            <Link href="/questions" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Questions
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Analytics
            </Link>
            <Link href="/tutor" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              AI Tutor
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and study settings</p>
        </div>

        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Manage your personal information and account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Smith" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  placeholder="john.smith@medical.edu" 
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Medical School</label>
                <input 
                  type="text" 
                  placeholder="Harvard Medical School" 
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">USMLE Target Date</label>
                <input 
                  type="date" 
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
            </CardContent>
          </Card>

          {/* Study Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Study Preferences
              </CardTitle>
              <CardDescription>
                Customize your learning experience and study habits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Daily Study Goal (minutes)</label>
                  <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground">
                    <option>30 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                    <option>120 minutes</option>
                    <option>180 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Questions per Session</label>
                  <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground">
                    <option>10 questions</option>
                    <option>20 questions</option>
                    <option>30 questions</option>
                    <option>40 questions</option>
                    <option>50 questions</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Difficulty Level</label>
                  <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground">
                    <option>Adaptive (Recommended)</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Study Mode</label>
                  <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground">
                    <option>Spaced Repetition</option>
                    <option>Random Review</option>
                    <option>Weak Areas Focus</option>
                    <option>Comprehensive</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Show Answer Explanations</h4>
                  <p className="text-sm text-muted-foreground">Display detailed explanations after each question</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Timer for Questions</h4>
                  <p className="text-sm text-muted-foreground">Enable countdown timer during practice</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Manage how you receive updates and reminders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Study Reminders</h4>
                  <p className="text-sm text-muted-foreground">Daily reminders to maintain study streak</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Performance Updates</h4>
                  <p className="text-sm text-muted-foreground">Weekly reports on your progress</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">New Features</h4>
                  <p className="text-sm text-muted-foreground">Updates about new study tools and features</p>
                </div>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Reminder Time</label>
                <input 
                  type="time" 
                  defaultValue="09:00"
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Appearance & Accessibility
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your learning environment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Theme</h4>
                  <p className="text-sm text-muted-foreground">Choose between light and dark mode</p>
                </div>
                <ThemeToggle />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Font Size</label>
                <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground">
                  <option>Small</option>
                  <option>Medium (Default)</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">High Contrast Mode</h4>
                  <p className="text-sm text-muted-foreground">Increase contrast for better readability</p>
                </div>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Sound Effects</h4>
                  <p className="text-sm text-muted-foreground">Audio feedback for interactions</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data & Privacy
              </CardTitle>
              <CardDescription>
                Manage your data and privacy preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Analytics & Performance Tracking</h4>
                  <p className="text-sm text-muted-foreground">Allow detailed performance analysis</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Usage Data Collection</h4>
                  <p className="text-sm text-muted-foreground">Help improve the platform with usage insights</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export Data
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  View Data Usage
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Account Actions
              </CardTitle>
              <CardDescription>
                Manage your account and subscription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Reset Progress
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Backup Data
                </Button>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-destructive mb-2">Danger Zone</h4>
                <Button variant="destructive" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex items-center justify-end space-x-4 pt-6">
            <Button variant="outline">
              Reset to Defaults
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}