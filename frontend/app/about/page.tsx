import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Project</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn more about our mission to support individuals with autism and their families through technology
                and community.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Our team working together"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are dedicated to empowering individuals with autism and their families through innovative technology,
                personalized resources, and a supportive community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Lightbulb className="h-8 w-8 text-blue-500" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We leverage cutting-edge machine learning technology to provide personalized insights and support
                  based on individual needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Users className="h-8 w-8 text-blue-500" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We foster a supportive community where individuals and families can connect, share experiences, and
                  learn from one another.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Heart className="h-8 w-8 text-blue-500" />
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide comprehensive resources, tools, and guidance to help navigate the unique challenges and
                  celebrate the strengths of autism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Technology</h2>
              <p className="text-muted-foreground">
                Our platform uses advanced machine learning algorithms to analyze uploaded documents and data, providing
                personalized insights and recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Document Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI can process medical records, assessments, and other documents to extract relevant
                      information.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Personalized Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on the analyzed data, we provide tailored resources, strategies, and support options.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor development and track progress over time with our intuitive dashboard.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold">Secure Data Handling</h3>
                    <p className="text-sm text-muted-foreground">
                      Your privacy is our priority. All data is encrypted and securely stored.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/dashboard" className="flex items-center gap-2">
                  Try Our Platform <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl border bg-background p-2">
                <img
                  alt="AI technology visualization"
                  className="object-cover w-full h-full rounded-lg"
                  src="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated professionals behind our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full bg-muted mb-4 overflow-hidden">
                  <img
                    alt="Team member"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=160&width=160"
                  />
                </div>
                <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
                <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Specialist in neurodevelopmental disorders with over 15 years of experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We collaborate with leading organizations in autism research and support.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 mt-12 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="h-16 w-32 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Partner Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of our community and help us create a more inclusive world for individuals with autism.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
