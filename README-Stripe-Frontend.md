
# 🧾 Stripe Payment Integration (Frontend-only with Next.js / React)

## ✅ Requirements
- A Stripe account → [https://stripe.com](https://stripe.com)
- Public **Publishable key**
- **Price ID** (not Product ID)
- Frontend-only app (e.g., Next.js with Clerk)

---

## 📦 1. Install Stripe JS SDK

```bash
npm install @stripe/stripe-js
```

---

## 🔑 2. Get Stripe Test Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Enable **Test Mode**
3. Go to **Developers → API keys**
4. Copy the **Publishable key** (`pk_test_...`)
5. Go to **Products → Create a product**
6. Add a price → You'll get a **Price ID** like `price_123abcXYZ`

---

## 🧠 3. Enable Stripe Checkout

Go to:  
👉 [https://dashboard.stripe.com/account/checkout/settings](https://dashboard.stripe.com/account/checkout/settings)  
✅ Enable: **Client-only integration**

---

## 🧪 4. Create Payment Button in Next.js

```jsx
// components/StripeCheckoutButton.js
"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY");

const StripeCheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      lineItems: [{ price: "price_123abcXYZ", quantity: 1 }],
      mode: "subscription", // or "payment" for one-time
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
    });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700"
    >
      Upgrade to Pro
    </button>
  );
};

export default StripeCheckoutButton;
```

---

## 💳 5. Use Test Card to Simulate Payment

Use this on Stripe’s Checkout page:

| Field        | Value                   |
|--------------|-------------------------|
| Card Number  | `4242 4242 4242 4242`   |
| Expiry       | Any future date         |
| CVC          | `123`                   |
| ZIP Code     | `12345`                 |

---

## ✅ 6. Handle Success / Cancel Pages

Create basic pages:

```jsx
// app/success/page.jsx
export default function SuccessPage() {
  return <h1>✅ Payment Successful!</h1>;
}

// app/cancel/page.jsx
export default function CancelPage() {
  return <h1>❌ Payment Cancelled</h1>;
}
```

---

## 🧼 7. Optional: Environment Variables

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
```

```js
// stripe.js
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
```

---

## 📌 Notes

- Stripe **Price ID ≠ Product ID**
- Don't use **Secret keys** in frontend (never)
- Test payments don't charge real money
- Use Stripe Dashboard to view transactions
