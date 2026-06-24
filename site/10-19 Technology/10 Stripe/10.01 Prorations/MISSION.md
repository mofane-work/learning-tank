# Mission: Stripe Prorations

## Why
Be able to reason confidently about what happens to a customer's bill — and to revenue — whenever a Stripe subscription changes mid-cycle, from a product/finance seat rather than as the engineer wiring up the API. When a teammate asks "what will this customer actually be charged if we move them to the new plan today?", answer it correctly without guessing.

## Success looks like
- Explain, in plain money terms, how Stripe calculates a proration (credit for unused time + charge for new time).
- Predict what a mid-cycle upgrade or downgrade does to the next invoice's line items.
- Pick the right `proration_behavior` (`create_prorations`, `none`, `always_invoice`) for a given scenario.
- Preview the exact proration amount before a change is applied, to show the customer or sign off on it.
- Recognise the common edge cases: trials, billing-cycle anchors, multiple changes in one period, and negative invoices / credit balance.

## Constraints
- Product/finance lens: concept-first, concrete dollar examples over code. API names appear only as labels for behaviours, not as integration instructions.
- Short lessons, one tangible win each.

## Out of scope
- Building or wiring up a Stripe Billing integration (code, webhooks, SDK setup).
- Tax, currency conversion, and the full subscription lifecycle beyond what prorations touch.
