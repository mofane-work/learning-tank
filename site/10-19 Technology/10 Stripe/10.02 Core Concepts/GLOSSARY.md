# Stripe Core Concepts Glossary

The canonical language for talking about Stripe's core objects and how they connect.

Terms are promoted here as the lessons introduce them — once you can use a term correctly, it lands here. After Lesson 1 the orientation terms below should feel obvious; later lessons add the rest.

## Terms

**Object**:
A single record in Stripe with a unique, prefixed ID (e.g. `cus_`, `prod_`, `pi_`). Almost everything you touch in Stripe — a customer, a price, a payment — is an object you create, retrieve, or update through the API.
_Avoid_: Entity, row, model

**Test mode / Live mode**:
Two fully separate copies of your Stripe account. Test mode uses fake cards and test API keys and moves no real money; live mode is production. Objects do not cross between them.
_Avoid_: Sandbox vs prod (Stripe says test/live), dev mode

**API key**:
The secret that authenticates your requests and selects test or live mode. A request's key determines which copy of the account it acts on.
_Avoid_: Token, password

**Product**:
A record of *what* you sell — a name and description, not a price. Introduced fully in Lesson 2.
_Avoid_: Item, SKU (a SKU is a different, legacy object)

**Price**:
A record of *how much* and *how often* to charge for a Product — amount, currency, and (for subscriptions) a recurring interval. One Product can have many Prices. Introduced fully in Lesson 2.
_Avoid_: Plan (legacy term), cost, rate

**Customer**:
The record representing the person or business you charge, and the hub that payment methods, subscriptions, and invoices attach to. Introduced fully in Lesson 3.
_Avoid_: User, account, payer

**PaymentIntent**:
The object that tracks a single one-time payment from creation to a final status (e.g. `succeeded`). Introduced fully in Lesson 4.
_Avoid_: Transaction, payment request

**Charge**:
The record of one attempt to move money on a PaymentIntent. A PaymentIntent can have more than one Charge if earlier attempts failed and were retried. Introduced fully in Lesson 4.
_Avoid_: Payment (the PaymentIntent is the payment; the Charge is an attempt)

**Subscription**:
The object that ties a Customer to one or more recurring Prices and generates an Invoice each billing cycle. Introduced fully in Lesson 5.
_Avoid_: Plan, recurring payment

**Invoice**:
An itemised bill Stripe generates (e.g. for a subscription cycle) and then attempts to pay. Introduced fully in Lesson 5.
_Avoid_: Receipt, bill, statement
