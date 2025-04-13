"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"

// Resource data
const resources = {
  articles: [
    {
      id: 1,
      title: "Understanding Sensory Processing in Autism",
      description:
        "Learn about sensory processing differences in individuals with autism and strategies to create sensory-friendly environments.",
      category: "Sensory",
      image: null,
    },
    {
      id: 2,
      title: "Effective Communication Strategies for Autism",
      description:
        "Discover various communication approaches and tools that can help individuals with autism express themselves and connect with others.",
      category: "Communication",
      image: null,
    },
    {
      id: 3,
      title: "Supporting Siblings of Children with Autism",
      description:
        "Guidance for parents on how to support siblings of children with autism, addressing their unique needs and concerns.",
      category: "Family Support",
      image: null,
    },
    {
      id: 4,
      title: "Navigating the Education System for Children with Autism",
      description:
        "A comprehensive guide to understanding educational rights, IEPs, and advocating for appropriate educational support.",
      category: "Education",
      image: null,
    },
    {
      id: 5,
      title: "Autism and Anxiety: Understanding the Connection",
      description:
        "Explore the relationship between autism and anxiety, with strategies to help manage anxiety symptoms.",
      category: "Mental Health",
      image: null,
    },
    {
      id: 6,
      title: "Transitioning to Adulthood with Autism",
      description:
        "Resources and guidance for supporting individuals with autism as they transition to adult life, including employment and independent living.",
      category: "Adulthood",
      image: null,
    },
  ],
  videos: [
    {
      id: 1,
      title: "Communication Strategies for Non-verbal Children",
      description: "Practical communication strategies and tools for supporting non-verbal children with autism.",
      category: "Communication",
      image: "/images/resource-1.png",
      duration: "15:24",
    },
    {
      id: 2,
      title: "Creating Sensory-Friendly Spaces at Home",
      description: "Step-by-step guide to designing spaces that accommodate sensory sensitivities.",
      category: "Sensory",
      image: "/images/resource-2.png",
      duration: "12:08",
    },
    {
      id: 3,
      title: "Social Skills Development Through Play",
      description: "Learn how to use play-based activities to help children with autism develop social skills.",
      category: "Social Skills",
      image: "/images/resource-1.png",
      duration: "18:45",
    },
    {
      id: 4,
      title: "Managing Meltdowns and Emotional Regulation",
      description: "Strategies for helping individuals with autism manage emotions and reduce meltdowns.",
      category: "Behavior",
      image: "/images/resource-2.png",
      duration: "22:17",
    },
    {
      id: 5,
      title: "Autism in Girls: Understanding the Differences",
      description: "How autism presents differently in girls and women, and why it's often missed in diagnosis.",
      category: "Diagnosis",
      image: "/images/resource-1.png",
      duration: "25:33",
    },
    {
      id: 6,
      title: "Inclusive Education Strategies for Teachers",
      description:
        "Practical classroom strategies for supporting students with autism in inclusive educational settings.",
      category: "Education",
      image: "/images/resource-2.png",
      duration: "19:51",
    },
  ],
  books: [
    {
      id: 1,
      title: "The Autism Guidebook: A Comprehensive Resource",
      description: "A comprehensive guide covering all aspects of autism, from diagnosis to adulthood.",
      author: "Dr. Sarah Johnson",
      image: "/images/book-1.png",
    },
    {
      id: 2,
      title: "Sensory Strategies: Supporting Individuals with Autism",
      description: "Practical strategies for addressing sensory processing differences in autism.",
      author: "Michael Chen, OT",
      image: "/images/book-2.png",
    },
    {
      id: 3,
      title: "Navigating Autism: A Parent's Journey",
      description: "A personal account of raising a child with autism, with practical advice for other parents.",
      author: "Jessica Williams",
      image: "/images/book-1.png",
    },
    {
      id: 4,
      title: "The Social World: Understanding Social Dynamics with Autism",
      description: "Insights into social interactions and relationships for individuals with autism.",
      author: "Dr. Robert Davis",
      image: "/images/book-2.png",
    },
    {
      id: 5,
      title: "Autism and Employment: Finding the Right Fit",
      description:
        "Guidance for individuals with autism seeking employment and for employers looking to create inclusive workplaces.",
      author: "Emily Rodriguez, PhD",
      image: "/images/book-1.png",
    },
    {
      id: 6,
      title: "Executive Functioning in Autism: Strategies for Success",
      description: "Tools and techniques for improving executive functioning skills in individuals with autism.",
      author: "Dr. James Thompson",
      image: "/images/book-2.png",
    },
  ],
  podcasts: [
    {
      id: 1,
      title: "Autism Journeys: Stories from the Spectrum",
      description: "Real stories from individuals with autism and their families, sharing experiences and insights.",
      host: "Maria Garcia",
      image: "/images/podcast-1.png",
      episodes: 45,
    },
    {
      id: 2,
      title: "Research Roundup: Latest in Autism Studies",
      description:
        "Discussions of recent research findings and their implications for autism understanding and support.",
      host: "Dr. David Lee",
      image: "/images/podcast-2.png",
      episodes: 32,
    },
    {
      id: 3,
      title: "Autism in Adulthood: Navigating Life on the Spectrum",
      description: "Conversations with autistic adults about their experiences, challenges, and successes.",
      host: "Alex Taylor",
      image: "/images/podcast-1.png",
      episodes: 28,
    },
    {
      id: 4,
      title: "Supporting Autism: A Podcast for Parents and Caregivers",
      description: "Practical advice and emotional support for those caring for individuals with autism.",
      host: "Jennifer Wilson",
      image: "/images/podcast-2.png",
      episodes: 56,
    },
    {
      id: 5,
      title: "Autism at Work: Employment and Inclusion",
      description: "Exploring workplace inclusion, accommodations, and success stories for individuals with autism.",
      host: "Robert Johnson",
      image: "/images/podcast-1.png",
      episodes: 19,
    },
    {
      id: 6,
      title: "Sensory Perspectives: Understanding Autism from Within",
      description: "Insights into the sensory experiences of individuals with autism, told from their perspective.",
      host: "Samantha Brown",
      image: "/images/podcast-2.png",
      episodes: 24,
    },
  ],
}

function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("articles")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Resources & Support
              </h1>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive collection of resources for individuals with autism and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="w-full">
            <div className="border-b dark:border-gray-700 mb-8">
              <div className="grid w-full grid-cols-4">
                {["articles", "videos", "books", "podcasts"].map((tab) => (
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

            {activeTab === "articles" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.articles.map((article) => (
                    <Card key={article.id}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
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
                          <CardDescription>Article • {article.category}</CardDescription>
                        </div>
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{article.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                          Read Article
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">View All Articles</Button>
                </div>
              </div>
            )}

            {activeTab === "videos" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.videos.map((video) => (
                    <Card key={video.id}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <CardDescription>
                            Video • {video.category} • {video.duration}
                          </CardDescription>
                        </div>
                        <CardTitle>{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md mb-4 overflow-hidden relative">
                          <img
                            src={video.image || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 rounded-full bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-8 w-8 text-blue-500"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{video.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                          Watch Video
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">View All Videos</Button>
                </div>
              </div>
            )}

            {activeTab === "books" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.books.map((book) => (
                    <Card key={book.id}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <CardDescription>Book • By {book.author}</CardDescription>
                        </div>
                        <CardTitle>{book.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center mb-4">
                          <div className="h-40 w-32 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                            <img
                              src={book.image || "/placeholder.svg"}
                              alt={book.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{book.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                          Learn More
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">View All Books</Button>
                </div>
              </div>
            )}

            {activeTab === "podcasts" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.podcasts.map((podcast) => (
                    <Card key={podcast.id}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
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
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.465a5 5 0 001.06-7.072m-2.829 9.9a9 9 0 010-12.728"
                            />
                          </svg>
                          <CardDescription>
                            Podcast • {podcast.episodes} Episodes • Hosted by {podcast.host}
                          </CardDescription>
                        </div>
                        <CardTitle>{podcast.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center mb-4">
                          <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <img
                              src={podcast.image || "/placeholder.svg"}
                              alt={podcast.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{podcast.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                          Listen Now
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">View All Podcasts</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Personalized Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter dark:text-white">Personalized Resources</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI-powered platform can analyze your documents and data to provide personalized resource
                recommendations tailored to your specific needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Custom Resource Library</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Access a curated collection of resources based on your specific situation and needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Tailored Recommendations</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive suggestions for articles, videos, and tools that address your specific challenges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Progress-Based Updates</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      As you track progress, our system updates your resource recommendations accordingly.
                    </p>
                  </div>
                </li>
              </ul>
              <Link to="/signup">
                <Button className="flex items-center gap-2">
                  Get Personalized Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl border bg-white dark:bg-gray-700 dark:border-gray-600 p-2">
                <img
                  alt="Personalized resource dashboard"
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/tech-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account to access personalized resources and support.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage
