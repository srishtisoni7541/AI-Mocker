import { Mic } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white p-1 rounded-lg">
                  <Mic size={18} className="text-purple-600" />
                </div>
                <span className="text-xl font-bold">InterviewAI</span>
              </div>
              <p className="text-purple-200 mb-6">
                Helping job seekers ace their interviews with AI-powered practice and feedback.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map(social => (
                  <a key={social} href={`#${social}`} className="bg-purple-800 p-2 rounded-full hover:bg-purple-700">
                    <div className="w-5 h-5"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                {['AI Interviews', 'Feedback Analysis', 'Industry Questions', 'Progress Tracking'].map(item => (
                  <li key={item}><a href="#" className="text-purple-200 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Blog', 'Interview Tips', 'Success Stories', 'FAQ'].map(item => (
                  <li key={item}><a href="#" className="text-purple-200 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Contact', 'Privacy Policy'].map(item => (
                  <li key={item}><a href="#" className="text-purple-200 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-800 text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-purple-200">© 2025 InterviewAI. All rights reserved.</p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-purple-200 hover:text-white mr-6">Terms</a>
              <a href="#" className="text-purple-200 hover:text-white mr-6">Privacy</a>
              <a href="#" className="text-purple-200 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
