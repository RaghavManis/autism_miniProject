import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, FileText, Film, Headphones } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources & Support</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive collection of resources for individuals with autism and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <CardDescription>Article</CardDescription>
                      </div>
                      <CardTitle>Understanding Sensory Processing in Autism</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn about sensory processing differences in individuals with autism and strategies to create
                        sensory-friendly environments.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="#" className="flex items-center justify-center gap-2">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="#">View All Articles</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Film className="h-5 w-5 text-blue-500" />
                        <CardDescription>Video</CardDescription>
                      </div>
                      <CardTitle>Communication Strategies for Non-verbal Children</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md mb-4"></div>
                      <p className="text-sm text-muted-foreground">
                        Practical communication strategies and tools for supporting non-verbal children with autism.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="#" className="flex items-center justify-center gap-2">
                          Watch Video <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="#">View All Videos</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="books" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-blue-500" />
                        <CardDescription>Book</CardDescription>
                      </div>
                      <CardTitle>The Autism Guidebook: A Comprehensive Resource</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <div className="h-40 w-32 bg-muted rounded-md"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive guide covering all aspects of autism, from diagnosis to adulthood.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="#" className="flex items-center justify-center gap-2">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="#">View All Books</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="podcasts" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Headphones className="h-5 w-5 text-blue-500" />
                        <CardDescription>Podcast</CardDescription>
                      </div>
                      <CardTitle>Autism Journeys: Stories from the Spectrum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <div className="h-32 w-32 bg-muted rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Real stories from individuals with autism and their families, sharing experiences and insights.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="#" className="flex items-center justify-center gap-2">
                          Listen Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="#">View All Podcasts</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Personalized Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Personalized Resources</h2>
              <p className="text-muted-foreground">
                Our AI-powered platform can analyze your documents and data to provide personalized resource
                recommendations tailored to your specific needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Custom Resource Library</h3>
                    <p className="text-sm text-muted-foreground">
                      Access a curated collection of resources based on your specific situation and needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Tailored Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive suggestions for articles, videos, and tools that address your specific challenges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Progress-Based Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      As you track progress, our system updates your resource recommendations accordingly.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/signup" className="flex items-center gap-2">
                  Get Personalized Resources <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl border bg-background p-2">
                <img
                  alt="Personalized resource dashboard"
                  className="object-cover w-full h-full rounded-lg"
                  src="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community Support</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with others who understand your journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join virtual and in-person support groups for parents, caregivers, and individuals with autism.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">Find a Group</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Participate in moderated online discussions to share experiences, ask questions, and offer support.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">Join Discussions</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Events & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Attend virtual and local events, workshops, and conferences focused on autism awareness and support.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">View Calendar</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account to access personalized resources and support.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
                asChild
              >
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
