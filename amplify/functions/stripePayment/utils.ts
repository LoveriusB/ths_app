import Stripe from "stripe";
import { Schema } from "../../data/resource";

const stripe = new Stripe(process.env.STRIP_SECRET_KEY ?? "");

export const EVENT_PRICE = 0.5; // Euros

export const createStripeSession = async (
  amount: number,
  registrationId: string,
  metadata: Schema["registration"]["type"][] | null
) => {
  if (!metadata) {
    throw new Error("No registration metadata provided");
  }

  const ids = metadata.map((item) => item.id);

  return await stripe.checkout.sessions.create(
    {
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Airsoft Payment",
            },
            unit_amount_decimal: (EVENT_PRICE * 100).toString(), // Stripe expects amount in cents
          },
          quantity: amount ?? 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.ths-airsoft.com/success",
      cancel_url: "https://www.ths-airsoft.com/cancel",

      client_reference_id: registrationId,
      metadata: { data: JSON.stringify(ids) },
    },
    { idempotencyKey: registrationId }
  );
};
