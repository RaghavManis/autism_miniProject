"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"

function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    // Handle file upload logic here
    console.log("Uploading file:", file)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Dashboard</h1>

      <div className="w-full mb-8">
        <div className="border-b dark:border-gray-700">
          <div className="grid w-full grid-cols-4">
            {["overview", "documents", "resources", "progress"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 text-center font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Documents</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold dark:text-white">3</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Documents uploaded</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Resources</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold dark:text-white">12</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Personalized resources</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold dark:text-white">2</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Upcoming events</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Documents</CardTitle>
              <CardDescription>Upload medical records, assessments, or other documents for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label htmlFor="document" className="text-sm font-medium dark:text-white">
                    Document
                  </label>
                  <input
                    id="document"
                    type="file"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <Button type="submit" disabled={!file} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Upload Document
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your uploaded documents and profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Communication Strategies for Non-verbal Children",
                    description: "Based on your child's assessment, these communication strategies may be helpful.",
                    image: "/images/resource-1.png",
                  },
                  {
                    title: "Sensory Processing Support Guide",
                    description:
                      "Tailored strategies to address the sensory sensitivities identified in your documents.",
                    image: "/images/resource-2.png",
                  },
                  {
                    title: "Educational Accommodations Toolkit",
                    description: "Recommended educational supports based on your child's learning profile.",
                    image: "/images/resource-1.png",
                  },
                ].map((recommendation, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border dark:border-gray-700 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={recommendation.image || "/placeholder.svg"}
                        alt={recommendation.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium dark:text-white">{recommendation.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{recommendation.description}</p>
                      <Link
                        to="#"
                        className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                      >
                        View Resource
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-3 w-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/resources">
                <Button variant="outline" className="w-full">
                  View All Recommendations
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Documents</CardTitle>
              <CardDescription>View and manage your uploaded documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Medical Assessment 1.pdf", date: "2023-05-15", type: "Medical" },
                  { name: "IEP Document.pdf", date: "2023-06-22", type: "Education" },
                  { name: "Therapy Notes.pdf", date: "2023-07-10", type: "Therapy" },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium dark:text-white">{doc.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Uploaded on {new Date(doc.date).toLocaleDateString()} • {doc.type}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Upload New Document</Button>
            </CardFooter>
          </Card>

          <Card id="upload-section">
            <CardHeader>
              <CardTitle>Upload New Document</CardTitle>
              <CardDescription>Upload medical records, assessments, or other documents for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="document-upload" className="text-sm font-medium dark:text-white">
                    Document
                  </label>
                  <input
                    id="document-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max size: 10MB)
                  </p>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="document-type" className="text-sm font-medium dark:text-white">
                    Document Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 dark:text-white">
                    <option value="">Select document type</option>
                    <option value="medical">Medical Record</option>
                    <option value="assessment">Assessment</option>
                    <option value="iep">IEP/Education Plan</option>
                    <option value="therapy">Therapy Notes</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="document-description" className="text-sm font-medium dark:text-white">
                    Description (Optional)
                  </label>
                  <input
                    id="document-description"
                    placeholder="Brief description of the document"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <Button type="submit" disabled={!file} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Upload Document
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "resources" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Personalized Resources</CardTitle>
              <CardDescription>
                Resources tailored to your specific needs based on your profile and documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Communication</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Visual Communication Strategies",
                        description:
                          "Effective visual communication tools and techniques for supporting non-verbal children.",
                        image: "/images/resource-1.png",
                      },
                      {
                        title: "AAC Device Selection Guide",
                        description:
                          "How to choose the right augmentative and alternative communication device for your child.",
                        image: "/images/resource-2.png",
                      },
                    ].map((resource, i) => (
                      <Card key={i}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-2 h-32 w-full overflow-hidden rounded-md">
                            <img
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full">
                            View Resource
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Sensory Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Creating Sensory-Friendly Environments",
                        description:
                          "Practical strategies for creating sensory-friendly spaces at home and in the community.",
                        image: "/images/resource-1.png",
                      },
                      {
                        title: "Sensory Diet Planning Guide",
                        description:
                          "How to develop a personalized sensory diet to support regulation throughout the day.",
                        image: "/images/resource-2.png",
                      },
                    ].map((resource, i) => (
                      <Card key={i}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-2 h-32 w-full overflow-hidden rounded-md">
                            <img
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full">
                            View Resource
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/resources">
                <Button variant="outline" className="w-full">
                  Browse All Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}

      {activeTab === "progress" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>Track development and progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium dark:text-white">Communication Skills</h3>
                    <span className="text-sm font-medium dark:text-white">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium dark:text-white">Social Interaction</h3>
                    <span className="text-sm font-medium dark:text-white">48%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "48%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium dark:text-white">Self-Regulation</h3>
                    <span className="text-sm font-medium dark:text-white">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium dark:text-white">Daily Living Skills</h3>
                    <span className="text-sm font-medium dark:text-white">59%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "59%" }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4 dark:text-white">Progress Over Time</h3>
                <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Progress Chart</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Progress</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Goals & Milestones</CardTitle>
              <CardDescription>Set and track goals for development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Learn 5 new signs", progress: 80 },
                  { name: "Participate in group activities", progress: 40 },
                  { name: "Follow 2-step instructions", progress: 60 },
                  { name: "Self-regulate during transitions", progress: 30 },
                ].map((goal, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium dark:text-white">{goal.name}</h3>
                      <span className="text-sm font-medium dark:text-white">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add New Goal</Button>
              <Button>Update Goals</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
