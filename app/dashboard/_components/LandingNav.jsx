import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'
import React from 'react'

const LandingNav = () => {
  return (
    <div>
       <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 text-white p-2 rounded-lg">
            <Mic size={20} />
          </div>
          <span className="text-xl font-bold text-purple-900">InterviewAI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-purple-700">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-700">How it works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-purple-700">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-700">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/auth/sign-in" className="hidden sm:block text-purple-600 hover:text-purple-800">Login</a>
          <a href="/auth/sign-up">
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default LandingNav
