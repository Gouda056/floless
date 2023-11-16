// @ts-nocheck
import { loadStripe } from "@stripe/stripe-js";

// Define checkout function
export async function checkout(lineItems, successUrl) {
  const stripe = await loadStripe("pk_test_51NLd6sSAOtfidhBDSytN1XyuaI6LGXkSwZNxHSYnEtMefochYepirDsPGJvNgf9WJVbhCdsXi2ZKsQWlhDd5NbqG00SFJKQwzf");
  try {
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems,
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.href,
    });

    if (error) {
      console.error("Stripe redirect error:", error);
    }
  } catch (error) {
    console.error("An error occurred during the Stripe checkout:", error);
  }
}
