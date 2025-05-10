// app/success/page.jsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
// Save user status to Neon SQL here

export default function SuccessPage() {
  const { user } = useUser();

  useEffect(() => {
    // Optional: update DB with user.email as premium
    console.log("Mark user as premium:", user?.primaryEmailAddress?.emailAddress);
    // You can now send data to your Neon DB using a client SDK
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-gray-600">You're now a Pro member 🎉</p>
    </div>
  );
}
