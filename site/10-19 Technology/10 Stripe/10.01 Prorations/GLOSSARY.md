# Stripe Prorations Glossary

The canonical language for talking about how Stripe adjusts a customer's bill when a subscription changes part-way through a billing period.

Terms are promoted here only once you can use them correctly — not when they're first introduced. After Lesson 1, the entries below should feel obvious; if one doesn't, that's a signal to revisit the lesson or ask.

## Terms

**Proration**:
The split bill Stripe produces when a subscription changes mid-cycle: a credit for time already paid but not used, plus a charge for the new price over the time remaining.
_Avoid_: Adjustment, partial refund

**Proration date**:
The exact moment Stripe uses to divide the billing period into "used" and "remaining" time. Stripe prorates to the second.
_Avoid_: Change date, switch time

**Billing period**:
The span between two recurring invoices (e.g. one month). Proration is calculated against this period's start and end.
_Avoid_: Cycle length, subscription term

**proration_behavior**:
The setting that decides what a subscription change does to billing: `create_prorations` (make the line items, bill on the next invoice), `always_invoice` (make them and bill immediately), or `none` (skip proration entirely).
_Avoid_: Proration mode, proration type

**Billing cycle anchor**:
The reference point that fixes which day a customer is billed on, and the period that proration is measured against. Moving it triggers an immediate invoice.
_Avoid_: Renewal date, billing day

**Credit proration**:
A proration that nets negative — produced by a downgrade or mid-period cancellation. Not refunded automatically.
_Avoid_: Refund, partial refund

**Credit balance**:
Money owed back to a customer (e.g. from a credit proration) that sits on their account and reduces future invoices instead of being refunded.
_Avoid_: Account credit, store credit

**Preview invoice**:
A dry-run upcoming invoice that shows what a change would cost without modifying the subscription. Pin it to the same proration date as the real change so the two amounts match.
_Avoid_: Draft invoice, estimate
