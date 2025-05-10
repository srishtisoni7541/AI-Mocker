'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Clock, BarChart3, CheckCircle } from "lucide-react";
import Footer from "./dashboard/_components/Footer";
import LandingNav from "./dashboard/_components/LandingNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
     <LandingNav/>

      {/* Hero Section */}
      <main className="pt-10 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 leading-tight">
                Ace Your Next Interview with AI Coaching
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Practice interviews anytime, anywhere with our AI-powered mock interview platform. Get real-time feedback and improve your skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 py-6 px-8 text-lg"
                  onClick={() => window.location.href = '/auth/sign-in'}>
                  Get Started <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 py-6 px-8 text-lg">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-purple-${i*100}`}></div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-purple-900">5,000+</span> interviews practiced this week
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-600 h-3 w-3 rounded-full"></div>
                    <div className="text-purple-900 font-medium">Mock Interview in Progress</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p className="text-gray-800 font-medium">Interviewer AI:</p>
                    <p className="text-gray-600 mt-1">Can you tell me about a challenging project you've worked on and how you overcame obstacles?</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-800 font-medium">You:</p>
                    <p className="text-gray-600 mt-1">In my last role, I led a team that was tasked with...</p>
                    <div className="mt-3 w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <Clock size={16} className="inline mr-1" /> 12:45 elapsed
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-gray-600 border-gray-300">
                        Pause
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        End Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900">Why Choose InterviewAI?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers everything you need to prepare for your next interview
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Mic className="text-purple-600" size={28} />,
                title: "Realistic Interviews",
                description: "Practice with AI that simulates real interviewers from top companies"
              },
              {
                icon: <BarChart3 className="text-purple-600" size={28} />,
                title: "Performance Analysis",
                description: "Get detailed feedback on your answers, communication skills, and body language"
              },
              {
                icon: <Clock className="text-purple-600" size={28} />,
                title: "Practice Anytime",
                description: "No scheduling needed - practice whenever works for you, 24/7"
              },
              {
                icon: <CheckCircle className="text-purple-600" size={28} />,
                title: "Industry-Specific Questions",
                description: "Tailored questions for tech, finance, healthcare, and more"
              },
              {
                icon: <ArrowRight className="text-purple-600" size={28} />,
                title: "Progressive Learning",
                description: "Our AI adapts to your skill level and helps you improve gradually"
              },
              {
                icon: <CheckCircle className="text-purple-600" size={28} />,
                title: "Interview Recording",
                description: "Review your performance with recorded sessions and notes"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition-all">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with InterviewAI is simple and quick
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create an account",
                description: "Sign up in seconds and set up your profile with your industry and experience"
              },
              {
                step: "02",
                title: "Select interview type",
                description: "Choose from behavioral, technical, or role-specific interviews"
              },
              {
                step: "03",
                title: "Practice and improve",
                description: "Get instant feedback after each session and track your progress over time"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="text-3xl font-bold text-purple-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-purple-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 py-6 px-8 text-lg"
              onClick={() => window.location.href = '/auth/sign-in'}>
              Start Your First Interview <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
   
    </div>
  );
}