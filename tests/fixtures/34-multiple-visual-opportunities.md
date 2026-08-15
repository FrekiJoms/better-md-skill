# Multi-visual README

A shopping application with several sections that each benefit from a distinct visual.

## Checkout flow

Customers add items to the cart, enter shipping details, choose a payment method, and confirm the order. Payments are processed against the payment gateway, then the order is confirmed.

## Customer dashboard

After login, customers see their order history, saved addresses, and loyalty points balance. The layout includes a navigation sidebar, summary cards, and a points progress bar.

## Architecture

The storefront web app talks to the catalog API and the checkout API. Both APIs share the customer database. Payment processing is delegated to an external gateway service through an adapter.

## Order tracking

The tracking page shows the package status at each stage from warehouse to delivery.