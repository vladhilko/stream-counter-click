## Start

### How to setup Karafka?

- https://karafka.io/docs/Setting-up-Kafka/


### Initial Steps

```
$ docker-compose up
$ bundle exec karafka server
$ ./bin/dev
```

### Send a new kafka event

```
$ Karafka.producer.produce_sync(topic: 'events', payload: {'message'=> 'hello' }.to_json)
```
