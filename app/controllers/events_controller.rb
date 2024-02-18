class EventsController < ApplicationController
  def index
    @events = Event.all.order(created_at: :desc)
  end

  def produce_kafka_event
    Karafka.producer.produce_sync(topic: 'events', payload: { 'message'=> Faker::Name.name }.to_json)
    head :ok
  rescue StandardError => e
    render json: { error: e.message }, status: :internal_server_error
  end
end
