
// import { AlertTriangle } from "lucide-react";

// export default function TestSubmitted() {
//   return (
//     <div className="flex h-screen items-center justify-center flex-col bg-purple-50 p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-purple-200">
//         <div className="flex items-center justify-center mb-4">
//           <div className="bg-purple-100 p-3 rounded-full">
//             <AlertTriangle size={32} className="text-purple-600" />
//           </div>
//         </div>
        
//         <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
//           Test Auto-Submitted
//         </h1>
        
//         <div className="bg-purple-100 p-4 rounded-lg mb-6">
//           <p className="text-purple-800 text-center">
//             You switched the tab or minimized the window during the test.
//           </p>
//         </div>
        
//         <div className="flex justify-center">
//           <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
//             Return to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';

import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TestSubmitted() {
  const router = useRouter();

  const handleReturn = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col bg-purple-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-purple-200">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <AlertTriangle size={32} className="text-purple-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">
          Test Auto-Submitted
        </h1>
        
        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <p className="text-purple-800 text-center">
            You switched the tab or minimized the window during the test.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleReturn}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
