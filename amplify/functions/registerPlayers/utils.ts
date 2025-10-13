/* eslint-disable @typescript-eslint/no-explicit-any */
import stripe, { Stripe } from 'stripe';

export const getStripeHeaders = (event: any) => {
  const sig =
    event.headers?.['stripe-signature'] ??
    event.headers?.['Stripe-Signature'] ??
    event.headers?.['STRIPE-SIGNATURE'];

  if (!sig) {
    throw new Error('Missing stripe-signature header');
  }

  return sig;
};

export const getRawBody = (event: any) => {
  return event.isBase64Encoded
    ? Buffer.from(event.body, 'base64').toString('utf8')
    : event.body;
};

export const buildStripeEvent = (event: any): Stripe.Event => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const rawBody = getRawBody(event);
  const sig = getStripeHeaders(event);

  let stripeEvent: Stripe.Event;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      endpointSecret ?? ''
    );
  } catch (err) {
    console.error('⚠️  Webhook signature verification failed.', err);
    throw new Error('Invalid signature');
  }

  console.log('✅ Verified:', stripeEvent.id, stripeEvent.type);
  return stripeEvent;
};
