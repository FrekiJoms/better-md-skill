# Architecture of Cloud Messenger

Cloud Messenger is built from several components that communicate over a message bus.

## Components

The frontend application runs in the browser and talks to a backend API over HTTPS. The backend API validates requests, then publishes messages to a queue. A worker service consumes messages from the queue, performs processing, and stores results in the database. An authentication service issues and validates tokens used by both the frontend and the API. External integrations (Slack, email) connect to the worker through adapters.

## Data flow

Messages flow from the frontend to the API, then to the queue, then to the worker, and finally to the database and external integrations. Errors are written back to the queue for retry.