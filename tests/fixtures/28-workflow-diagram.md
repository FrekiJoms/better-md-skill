# Order Processing

How an order travels through the system.

## The pipeline

An order is submitted by the customer through the storefront. It enters validation, where the payment is authorized and stock is checked. Validated orders move to fulfillment, where items are picked and packed. The packing step triggers shipping label generation. Finally, the order is marked completed and the customer receives a notification. If validation fails, the order is routed to the exception queue for manual review.

## Failure handling

Failed payments and out-of-stock items both land in the exception queue. Support staff review them and either retry or cancel the order.