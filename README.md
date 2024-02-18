## Overview

The application integrates Kafka with a Rails backend, processing messages in real-time and updating the frontend using Action Cable.

![KafkaSample](https://github.com/vladhilko/stream-counter-click/assets/12089948/15d5e109-fa70-4131-aa2e-0f8cc6ec06da)


## Getting Started

### Setting Up the Environment

1. **Start Kafka and Zookeeper**:
    Use Docker Compose to start Kafka, Zookeeper, and any other dependent services:
    ```sh
    docker-compose up -d
    ```

2. **Run Karafka Server**:
    Start the Karafka server to begin consuming Kafka messages:
    ```sh
    bundle exec karafka server
    ```

3. **Start Rails Server**:
    Use the provided script to start the Rails server along with any other development processes:
    ```sh
    ./bin/dev
    ```

### Sending Kafka Events

To send a new Kafka event and see real-time updates in the web UI, use the following command in your Rails console:

```ruby
Karafka.producer.produce_sync(topic: 'events', payload: { 'message': 'hello' }.to_json)
```

### Accessing the Application

Navigate to the following URLs to access the application and the Karafka dashboard:

- Application URL: <http://127.0.0.1:3000/>
- Karafka Dashboard: <http://127.0.0.1:3000/karafka/dashboard>

Karafka Setup and Documentation
-------------------------------

For detailed instructions on setting up Karafka and Kafka, refer to the official Karafka documentation:

- [Setting up Kafka](https://karafka.io/docs/setting-up-kafka/)
- [Getting Started with the Web UI](https://karafka.io/docs/web-ui-getting-started/)
