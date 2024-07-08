## Overview

The test application checks and demonstrates the integration of Kafka with a Rails backend, processing messages in real-time and updating the frontend using Action Cable.

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


### Configuring Karafka Settings

You can customize the behavior of Karafka by adjusting certain configuration settings. Two important settings you may want to consider are `max_messages` and `max_wait_time`.

- **max_messages**: This setting determines how many messages Karafka fetches from Kafka in one go. By default, it is set to 100. You can adjust this value based on your application's requirements and performance considerations.

- **max_wait_time**: This setting specifies the number of milliseconds Karafka waits while fetching data from Kafka. The default value is 1000 milliseconds (1 second). You can modify this value to control the maximum latency experienced during message consumption.

To configure these settings, you can modify the `karafka.rb` file in your application. Here's an example of how you can set these values:

```ruby
class KarafkaApp < Karafka::App
  setup do |config|
    # Other configuration settings...
    config.max_wait_time = 500 # Adjust the wait time to 500 milliseconds
    config.max_messages = 50   # Fetch 50 messages from Kafka in one go
  end
end
```

![karafka-sample](https://github.com/vladhilko/stream-counter-click/assets/12089948/9bf2f578-90f9-41a0-8d3b-e080940bfd2b)


### Karafka Setup and Documentation

For detailed instructions on setting up Karafka and Kafka, refer to the official Karafka documentation:

- [Setting up Kafka](https://karafka.io/docs/setting-up-kafka/)
- [Getting Started with the Web UI](https://karafka.io/docs/web-ui-getting-started/)

For more advanced configuration options and settings, you can refer to the [Karafka configuration file](https://github.com/karafka/karafka/blob/master/lib/karafka/setup/config.rb). This file contains additional settings and parameters that you can customize to fine-tune the behavior of your Karafka application.
