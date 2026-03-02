import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? ""
);

export async function POST(request: Request) {
  try {
    const { unit_amount, description } = (await request
      .json()
      .catch(() => undefined)) || { unit_amount: 5000 };
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'custom',
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount,
            product_data: {
              name: 'Honeymoon Fund',
              description,
            },
          },
          quantity: 1,
        },
      ],
      payment_method_types: ['cashapp', 'card'],
      return_url: `${request.headers.get('origin')}/registry/complete?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
