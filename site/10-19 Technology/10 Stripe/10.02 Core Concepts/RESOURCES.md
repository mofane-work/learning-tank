# Stripe Core Concepts Resources

## Knowledge

- [Docs: _API reference_ — Stripe](https://docs.stripe.com/api)
  The canonical catalogue of every Stripe object and its fields. Use for: confirming exactly what an object holds and how it points at others.
- [Docs: _How products and prices work_ — Stripe](https://docs.stripe.com/products-prices/how-products-and-prices-work)
  Product (what you sell) vs Price (how much + how often), multiple prices per product, why prices are immutable. Use for: the catalogue half of the model.
- [Docs: _Payment Intents API_ — Stripe](https://docs.stripe.com/payments/payment-intents)
  How a one-time payment is tracked from creation to completion; the relationship between PaymentIntent, PaymentMethod, and Charge. Use for: the payments half of the model.
- [Docs: _PaymentIntent lifecycle_ — Stripe](https://docs.stripe.com/payments/paymentintents/lifecycle)
  The status state machine (`requires_payment_method` → … → `succeeded`). Use for: understanding why a payment is in the state it's in.
- [Docs: _How subscriptions work_ — Stripe Billing](https://docs.stripe.com/billing/subscriptions/overview)
  Subscriptions tie a Customer to Prices and generate Invoices on a cycle. Use for: the recurring-billing half of the model.
- [Docs: _How Checkout works_ — Stripe](https://docs.stripe.com/payments/checkout/how-checkout-works)
  The hosted-payment-page option and where it sits among the integration choices. Use for: choosing an integration approach.

## Wisdom (Communities)

- [Stripe Developers Discord](https://stripe.com/go/developer-chat)
  Official community. Use for: sanity-checking how objects fit together in a real integration.
- [r/stripe](https://reddit.com/r/stripe)
  Practitioners discussing integration choices. Use for: war stories on Checkout vs Elements vs raw API.
- [Stack Overflow — `stripe-payments` tag](https://stackoverflow.com/questions/tagged/stripe-payments)
  Searchable Q&A. Use for: a specific object-relationship question someone has already hit.

## Gaps
- A single official diagram of the whole core object graph doesn't exist in Stripe's docs; the `stripe-object-map` reference in this topic fills that gap.
