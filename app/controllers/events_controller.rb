class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def produce_kafka_event
    Karafka.producer.produce_sync(topic: 'events', payload: { 'message'=> 'hello' }.to_json)
    head :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :internal_server_error
  end
end
