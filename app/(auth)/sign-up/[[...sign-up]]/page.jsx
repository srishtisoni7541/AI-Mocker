// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return <SignUp />
// }


import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
            Join thousands of professionals revolutionizing their workflow
          </p>
          
          <div className="flex flex-col space-y-4 text-left max-w-sm">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-600">AI-powered mock generation</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <p className="text-gray-600">Lightning fast processing</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">Get started with AI-Mocker in seconds</p>
          </div>
          
          <div className="mb-6">
            <SignUp 
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
                  formFieldInput: 'bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500',
                  formButtonPrimary: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all',
                  footerActionText: 'text-gray-600',
                  footerActionLink: 'text-purple-600 hover:text-purple-800',
                  formFieldSuccessText: 'text-green-600',
                  formFieldWarningText: 'text-yellow-600',
                  formFieldErrorText: 'text-red-600',
                }
              }}
            />
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>Already have an account? <a href="/sign-in" className="font-medium text-purple-600 hover:text-purple-800 transition">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}