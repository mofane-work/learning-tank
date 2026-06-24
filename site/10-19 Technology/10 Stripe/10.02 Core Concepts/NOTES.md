# Notes

Working notes and learner preferences for this workspace.

## Learner preferences
- **Lens:** conceptual map. Lead with what each object is and how objects relate; minimal code. Confirmed via planning Q&A 2026-06-25.
- **Scope:** both one-time payments and recurring billing, balanced. Confirmed 2026-06-25.
- **Examples:** concrete money flows and ER-style relationship diagrams over abstract formulas.

## Curriculum roadmap
1. `0001-the-stripe-object-model` — orientation: everything is an object with an ID, API + Dashboard, test vs live mode, the bird's-eye relationship map. ← first lesson
2. `0002-products-and-prices` — Product (what) vs Price (how much + how often); one Product → many Prices; recurring vs one-time; price immutability.
3. `0003-customers-and-payment-methods` — the Customer hub; PaymentMethod; saving a card (SetupIntent); reuse across payments and subscriptions.
4. `0004-payment-intent-lifecycle` — one-time payments: PaymentIntent + PaymentMethod → Charge; the status state machine; authentication/SCA; Charge → balance transaction → payout.
5. `0005-subscriptions-and-invoices` — recurring billing: Subscription ties Customer + Price; billing cycles; Invoice and Invoice Items; auto-pay via PaymentIntent. Cross-links to 10.01 Prorations.
6. `0006-integration-options` — the payoff: Payment Links → Checkout → Elements → raw API; Billing; webhooks for staying in sync. Decision guide.

Reference: `stripe-object-map` — ER cheatsheet + integration-option decision table.

Teach one at a time, gated on the learner's questions and demonstrated understanding. Calibrate depth after 0001 before authoring the rest.
