
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 text-gray-800">
      {/* Left Side - Branding */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-10 space-y-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-purple-50 opacity-70 blur-3xl"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              AI-Mocker
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Revolutionize your workflow with our AI-powered solutions
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Smart AI</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span>Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md p-8 bg-purple-100 rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to continue to AI-Mocker</p>
          </div>
          
          <div className="mb-6 bg-p">
            <SignIn 
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-gray-800',
                  headerSubtitle: 'text-gray-600',
                  socialButtonsBlockButton: 'border-gray-200 hover:bg-gray-50 text-gray-700',
                  socialButtonsBlockButtonText: 'text-gray-700',
                  dividerLine: 'bg-gray-200',
                  dividerText: 'text-gray-500',
                  formFieldLabel: 'text-gray-700',
                  formFieldInput: 'bg-purple-100 border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500',
                  formButtonPrimary: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white',
                  footerActionText: 'text-gray-600',
                  footerActionLink: 'text-purple-600 hover:text-purple-800',
                }
              }}
            />
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>Don't have an account? <a href="/sign-up" className="font-medium text-purple-600 hover:text-purple-800 transition">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}