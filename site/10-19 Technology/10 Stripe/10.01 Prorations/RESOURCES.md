# Stripe Prorations Resources

## Knowledge

- [Docs: _Prorations_ — Stripe Billing](https://docs.stripe.com/billing/subscriptions/prorations)
  The primary source. How Stripe credits unused time and charges for new time, the proration date, the three `proration_behavior` options, and previewing a proration. Use for: anything about how a mid-cycle change hits the next invoice.
- [Docs: _Upgrade and downgrade subscriptions_ — Stripe Billing](https://docs.stripe.com/billing/subscriptions/upgrade-downgrade)
  How same-cycle vs different-cycle plan changes behave, immediate (`always_invoice`) vs end-of-period changes, and when to use a subscription schedule. Use for: deciding when a change takes effect and bills.
- [Docs: _Preview an invoice_ / upcoming invoice — Stripe Billing](https://docs.stripe.com/billing/subscriptions/prorations#preview-proration)
  Forecasting the proration amount before applying a change, and pinning it with `proration_date`. Use for: "what will the customer be charged today?"

## Wisdom (Communities)

- [Stripe Developers Discord](https://stripe.com/go/developer-chat)
  Official community; Billing-specific channels. Use for: sanity-checking real proration scenarios against people who run them in production.
- [r/stripe](https://reddit.com/r/stripe)
  Practitioners discussing billing edge cases. Use for: war stories on downgrades, credits, and unexpected invoice amounts.
- [Stack Overflow — `stripe-payments` / `stripe-billing` tags](https://stackoverflow.com/questions/tagged/stripe-billing)
  Searchable Q&A. Use for: a specific proration behaviour someone has already hit.

## Gaps
- A neutral, non-Stripe explainer of proration accounting (deferred revenue treatment) would balance the vendor docs. Not yet sourced.
