import { Link } from "react-router-dom"
import Button from "../components/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                About Our Project
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn more about our mission to support individuals with autism and their families through technology
                and community.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Our team working together"
                  className="object-cover w-full h-full"
                  src="/images/hero-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Our Mission
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are dedicated to empowering individuals with autism and their families through innovative technology,
                personalized resources, and a supportive community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We leverage cutting-edge machine learning technology to provide personalized insights and support
                  based on individual needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We foster a supportive community where individuals and families can connect, share experiences, and
                  learn from one another.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide comprehensive resources, tools, and guidance to help navigate the unique challenges and
                  celebrate the strengths of autism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter dark:text-white">Our Technology</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform uses advanced machine learning algorithms to analyze uploaded documents and data, providing
                personalized insights and recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Document Analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our AI can process medical records, assessments, and other documents to extract relevant
                      information.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Personalized Recommendations</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Based on the analyzed data, we provide tailored resources, strategies, and support options.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Progress Tracking</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Monitor development and track progress over time with our intuitive dashboard.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 mt-0.5"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Secure Data Handling</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your privacy is our priority. All data is encrypted and securely stored.
                    </p>
                  </div>
                </li>
              </ul>
              <Link to="/dashboard">
                <Button className="flex items-center gap-2">
                  Try Our Platform
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
                  alt="AI technology visualization"
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/tech-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Our Team</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated professionals behind our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                name: "Dr. Jane Smith",
                role: "Chief Medical Officer",
                image: "/images/team-1.png",
                bio: "Specialist in neurodevelopmental disorders with over 15 years of experience.",
              },
              {
                name: "David Johnson",
                role: "Lead Developer",
                image: "/images/team-2.png",
                bio: "AI and machine learning expert with a passion for accessible technology.",
              },
              {
                name: "Dr. Maria Rodriguez",
                role: "Research Director",
                image: "/images/team-3.png",
                bio: "Published researcher specializing in autism spectrum disorders.",
              },
              {
                name: "Robert Chen",
                role: "Community Manager",
                image: "/images/team-4.png",
                bio: "Parent advocate with extensive experience in support group facilitation.",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 overflow-hidden">
                  <img
                    alt={member.name}
                    className="object-cover w-full h-full"
                    src={member.image || "/placeholder.svg"}
                  />
                </div>
                <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of our community and help us create a more inclusive world for individuals with autism.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
