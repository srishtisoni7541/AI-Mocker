// import { SignIn } from '@clerk/nextjs'

// export default function Page() {
//   return <SignIn />
// }


import { SignIn, SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
          alt="Welcome Image"
          className="w-3/4 mb-8 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome to AI-Mocker
        </h1>
        <p className="text-gray-600 text-center mt-4">
          Join us and start your journey today!
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md p-8">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
