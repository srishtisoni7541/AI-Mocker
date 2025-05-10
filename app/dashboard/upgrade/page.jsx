import SubscribeButton from "@/utils/SubscriptionButton";
import React from "react";

const UpgradePage = () => {
  const plans = [
    {
      title: "Free Plan",
      price: "₹0",
      features: [
        "1 Mock Interview per month",
        "Basic questions only",
        "Limited feedback",
        "No resume analysis",
      ],
      isPro: false,
    },
    {
      title: "Pro Plan",
      price: "₹499/month",
      features: [
        "Unlimited Mock Interviews",
        "Advanced-level questions",
        "Detailed AI-powered feedback",
        "Resume & profile analysis",
        "Priority support",
      ],
      isPro: true,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border p-6 shadow-sm transition-all hover:shadow-xl ${
              plan.isPro ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{plan.title}</h3>
            <p className="text-3xl font-bold text-purple-700 mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 text-sm flex items-start">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
           <SubscribeButton/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradePage;
