import { Schema } from '../../data/resource';
import { onPaymentExpired } from './status/expired';
import { onPaymentFailed } from './status/failed';
import { onPaymentSuccess } from './status/success';
import { buildStripeEvent } from './utils';

export const handler: Schema['registerPlayer']['functionHandler'] = async (
  event: unknown
) => {
  const stripeEvent = buildStripeEvent(event);
  console.log(stripeEvent.data.object);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj = stripeEvent.data.object as any;
  const raw = obj?.metadata?.data;
  let parsed: string[];
  if (raw === null) {
    throw new Error('metadata.data est absent sur cet objet Stripe');
  }

  if (typeof raw === 'string') {
    // Optionnel: garde un oeil sur la troncature 500 chars
    if (raw.length > 490) {
      console.warn('metadata.data ~500+ chars: risque de troncature Stripe');
    }
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Ici, soit c'est tronqué, soit c'est pas du JSON
      console.error(
        'metadata.data non JSON (string) => utilise client_reference_id pour refetch en DB'
      );
      throw new Error('metadata.data non JSON (string)');
    }
    // OK
    // parsed est ton array d’objets
  } else if (typeof raw === 'object') {
    // 👉 Ta valeur est DÉJÀ un objet/array : ne surtout pas faire JSON.parse
    parsed = raw; // utilise tel quel
  } else {
    throw new Error(`metadata.data de type inattendu: ${typeof raw}`);
  }
  console.log('Received Stripe event:', stripeEvent.type);
  console.log('Event data:', parsed);

  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      await onPaymentSuccess(parsed);
      break;
    case 'payment_intent.payment_failed':
      onPaymentFailed(); // Nothing to do here. Might be useful later?
      break;
    case 'checkout.session.expired':
      onPaymentExpired();
      break;
  }

  return true;
};
