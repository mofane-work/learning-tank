# Mission: Stripe Core Concepts

## Why
Build a clear mental model of Stripe's object graph and integration surface, so the ecosystem stops feeling like a wall of unfamiliar nouns. When starting (or reviewing) a Stripe integration, be able to name the core objects, draw how they connect — Product, Price, Customer, PaymentMethod, PaymentIntent, Charge, Subscription, Invoice — and choose the right integration approach for the job without trial and error.

## Success looks like
- Name the core Stripe objects and say, in one sentence each, what they represent.
- Draw the relationships: which object points at which (e.g. a Price belongs to a Product; a Subscription ties a Customer to a Price; an Invoice is paid by a PaymentIntent).
- Explain the difference between a **Product** (what you sell) and a **Price** (how much + how often), and why one Product can have many Prices.
- Trace a one-time payment from intent to settled money (PaymentIntent → Charge → payout).
- Trace a recurring charge (Subscription → Invoice → PaymentIntent) and know where Prorations (10.01) fit.
- Pick an integration option — Payment Links, Checkout, Elements, or the raw API — and justify the choice.

## Constraints
- **Conceptual-map lens:** lead with what each object *is* and how it relates; code/JSON appears only as a label or a tiny illustrative snippet, never as integration instructions.
- Balanced coverage of one-time **payments** and recurring **billing** — neither dominates.
- Short lessons, one tangible win each. Diagrams and concrete money examples over abstractions.

## Out of scope
- Building or wiring up a real integration (full SDK setup, server code, webhook handlers).
- Advanced products beyond a one-line mention: Connect (marketplaces), Tax, Radar (fraud), Issuing, Terminal, Sigma.
- Deep dives already covered elsewhere — mid-cycle proration mechanics live in [10.01 Prorations].
