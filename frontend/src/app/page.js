import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Upload,
  BarChart2,
  Target,
  Users,
  Award,
  Star,
  ChevronRight,
  Clock,
  FileText,
  Zap,
  Briefcase,
  TrendingUp,
  CheckCheck,
  Shield,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Announcement Banner */}
      <div className="bg-blue-50 py-2 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-blue-600">
            🎉 New Feature: AI-powered interview preparation now available!{" "}
            <Link
              href="/interview-prep"
              className="underline hover:text-blue-500"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 text-sm bg-white border border-gray-200 rounded-full shadow-sm">
                <Sparkles className="h-3.5 w-3.5 mr-1 text-blue-600" />
                <span>Trusted by 100+ professionals</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Optimize Your Resume with
                <span className="text-blue-600 block">AI-Powered Analysis</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Get instant feedback, tailored suggestions, and match your
                resume with the perfect job opportunities using advanced AI
                technology that understands what recruiters are looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-block h-12 w-12 rounded-full border-2 border-white shadow-sm"
                    >
                      <Image
                        src={`/person.svg?height=48&width=48`}
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 font-medium text-gray-700">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by 100+ job seekers worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <Image
                  src="/hero.svg?height=600&width=600"
                  alt="Resume Analysis Dashboard"
                  width={600}
                  height={600}
                  className="rounded-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 border border-gray-100">
                  <div className="bg-green-100 rounded-full p-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Interview Success Rate
                    </p>
                    <p className="text-lg font-bold text-green-600">+85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section  Narakhne aaile ko lagi, paxi time vayo vane rakhne*/}
      {/* <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[...Array(6)].map((_, i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=40&width=120`}
                alt={`Company logo ${i + 1}`}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
              Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to land your dream job
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered platform provides comprehensive resume analysis and
              optimization tools to help you stand out from the crowd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 rounded-lg"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    href={feature.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
              Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your resume analyzed and optimized in three simple steps
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-semibold mb-6 mx-auto relative z-10">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                    {/* image narakhne aaile */}
                    {/* <div className="mt-6 flex justify-center">
                      <Image
                        src={`/placeholder.svg?height=120&width=200`}
                        alt={step.title}
                        width={200}
                        height={120}
                        className="rounded-lg"
                      />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Analysis Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
                AI-Powered
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                See how our AI analyzes your resume in real-time
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our advanced AI engine scans your resume for over 50 key metrics
                and provides actionable feedback to improve your chances of
                landing interviews.
              </p>

              <div className="space-y-6">
                {analysisFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center">
                Try Resume Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-full">
                  <div className="flex border-b mb-4">
                    <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                      Analysis
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Optimization
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Job Matching
                    </button>
                  </div>
                  <div className="mt-0">
                    <Image
                      src="/ana.svg?height=500&width=500"
                      alt="Resume Analysis Demo"
                      width={500}
                      height={500}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm bg-white/20 hover:bg-white/30 text-white rounded-full mb-4">
              Results
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Proven Results for Job Seekers
            </h2>
            <p className="text-xl text-white/80">
              Our platform has helped thousands of professionals land their
              dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg"
              >
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold mb-4">{stat.value}</div>
                  <div className="text-lg text-white/90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who have improved their job
              search success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white border border-gray-200 rounded-lg"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={`/person.svg?height=56&width=56`}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="text-sm text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
              Pricing
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg border ${
                  plan.featured
                    ? "border-blue-500 ring-2 ring-blue-100"
                    : "border-gray-200"
                }`}
              >
                <div className="p-8">
                  {plan.featured && (
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      Rs.{plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500">/{plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full px-6 py-3 text-base font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      plan.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 text-sm border border-gray-200 rounded-full mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our resume optimization service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border border-gray-200 rounded-lg"
              >
                <div className="p-6">
                  <div className="font-semibold text-lg text-gray-900 mb-2">
                    {faq.question}
                  </div>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <button className="px-6 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center">
              Contact Support
              <MessageSquare className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="inline-flex items-center px-3 py-1 text-sm bg-white/20 hover:bg-white/30 text-white rounded-full mb-6">
            Get Started Today
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
            Ready to Optimize Your Resume?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Take your career to the next level with our cutting-edge resume
            optimization tools. Start for free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              Get Started Free
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-transparent border border-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              Schedule Demo
            </button>
          </div>
          <div className="mt-10 text-white/80 flex items-center justify-center">
            <Shield className="h-5 w-5 mr-2" />
            <span>14-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data for the components
const features = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Easy Resume Upload",
    description:
      "Upload your resume in any format (PDF, DOCX, TXT) and get instant analysis and feedback within seconds.",
    link: "/features/upload",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "AI-Powered Analysis",
    description:
      "Get detailed insights about your resume's strengths and areas for improvement with our advanced AI engine.",
    link: "/features/analysis",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Job Matching",
    description:
      "Find the perfect job opportunities that match your skills and experience from thousands of listings.",
    link: "/features/matching",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "ATS Optimization",
    description:
      "Ensure your resume passes Applicant Tracking Systems with our optimization tools and keyword suggestions.",
    link: "/features/ats",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Standards",
    description:
      "Get recommendations based on current industry standards and best practices from hiring managers.",
    link: "/features/standards",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Support",
    description:
      "Access to professional resume experts for personalized guidance and feedback on your application.",
    link: "/features/support",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Cover Letter Assistant",
    description:
      "Generate tailored cover letters that complement your resume and highlight your most relevant qualifications.",
    link: "/features/cover-letter",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Career Insights",
    description:
      "Get valuable insights into salary ranges, required skills, and growth opportunities in your industry.",
    link: "/features/insights",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Interview Preparation",
    description:
      "Practice with AI-powered mock interviews tailored to your target roles and receive instant feedback.",
    link: "/features/interview",
  },
];

const steps = [
  {
    title: "Upload Your Resume",
    description:
      "Simply upload your current resume in any format to get started with the analysis. Our system supports PDF, DOCX, and TXT files.",
  },
  {
    title: "Get Instant Analysis",
    description:
      "Our AI analyzes your resume for key metrics, formatting, content optimization, and keyword density to ensure ATS compatibility.",
  },
  {
    title: "Improve & Download",
    description:
      "Apply suggested improvements and download your optimized, ATS-friendly resume. Track your progress with our resume score.",
  },
];

const analysisFeatures = [
  {
    icon: <CheckCheck className="h-5 w-5" />,
    title: "ATS Compatibility Check",
    description:
      "Ensures your resume can be properly parsed by Applicant Tracking Systems.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Content Quality Analysis",
    description:
      "Evaluates the strength of your achievements, skills, and experience descriptions.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Keyword Optimization",
    description:
      "Identifies missing keywords and phrases relevant to your target positions.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Real-time Feedback",
    description:
      "Provides instant suggestions as you make changes to your resume.",
  },
];

const stats = [
  {
    value: "100+",
    label: "Active Users",
  },
  {
    value: "85%",
    label: "Interview Success Rate",
  },
  {
    value: "500+",
    label: "Resumes Analyzed",
  },
  {
    value: "24/7",
    label: "Expert Support",
  },
];

const testimonials = [
  {
    name: "Hari Shrestha",
    position: "Software Engineer at Google",
    content:
      "The AI analysis helped me identify key improvements in my resume. I landed my dream job at Google within weeks of using this platform!",
    date: "May 15, 2023",
  },
  {
    name: "Ram Khadka",
    position: "Marketing Manager at Adobe",
    content:
      "The job matching feature is incredible. It helped me find opportunities I wouldn't have discovered otherwise. The ATS optimization made all the difference.",
    date: "June 3, 2023",
  },
  {
    name: "Shyam Rana",
    position: "UX Designer at Microsoft",
    content:
      "The ATS optimization suggestions were game-changing. My interview callbacks increased by 300% after implementing the recommendations.",
    date: "April 22, 2023",
  },
];

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "0",
    period: "forever",
    features: [
      "Basic resume analysis",
      "Limited ATS compatibility check",
      "3 resume uploads per month",
      "Email support",
    ],
    buttonText: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    description: "For serious job seekers",
    price: "200",
    period: "month",
    features: [
      "Advanced resume analysis",
      "Full ATS optimization",
      "Unlimited resume uploads",
      "Job matching",
      "Cover letter assistant",
      "Priority email support",
    ],
    buttonText: "Start Pro Plan",
    featured: true,
  },
  {
    name: "Premium",
    description: "Complete career solution",
    price: "500",
    period: "month",
    features: [
      "Everything in Pro",
      "1-on-1 expert review",
      "LinkedIn profile optimization",
      "Interview preparation",
      "Career coaching session",
      "24/7 priority support",
    ],
    buttonText: "Start Premium Plan",
    featured: false,
  },
];

const faqs = [
  {
    question: "How does the AI resume analysis work?",
    answer:
      "Our AI engine analyzes your resume against 50+ key metrics including content quality, keyword optimization, formatting, and ATS compatibility. It then provides personalized recommendations to improve your resume.",
  },
  {
    question: "How accurate is the job matching feature?",
    answer:
      "Our job matching algorithm uses natural language processing to analyze both your resume and thousands of job listings to find the best matches based on skills, experience, and qualifications. It has a 92% accuracy rate in identifying relevant opportunities.",
  },
  {
    question: "Can I use the platform if I'm changing careers?",
    answer:
      "Our platform is especially helpful for career changers. It identifies transferable skills and helps you position your experience in a way that appeals to employers in your target industry.",
  },
  {
    question: "How often should I update my resume?",
    answer:
      "We recommend updating your resume every 3-6 months, or whenever you gain new skills or accomplishments. For active job seekers, tailoring your resume for each application using our tools can significantly increase your chances of success.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously. All uploaded resumes and personal information are encrypted and stored securely. We never share your data with third parties without your explicit consent.",
  },
];
