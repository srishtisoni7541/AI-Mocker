// components/SubscribeButton.jsx
"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function SubscribeButton() {
  const { user } = useUser();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const session = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      customerEmail: user?.emailAddresses[0]?.emailAddress,
      successUrl: process.env.NEXT_PUBLIC_SUCCESS_URL,
      cancelUrl: process.env.NEXT_PUBLIC_CANCEL_URL,
    });

    if (session.error) {
      console.error(session.error.message);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-all"
    >
      Upgrade to Pro
    </button>
  );
}
