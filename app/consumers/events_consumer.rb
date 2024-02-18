class EventsConsumer < ApplicationConsumer
  def consume
    messages.each do |message|
      event = Event.create!(
        message: message.payload['message'],
        message_queue: 'kafka'
      )

      ActionCable.server.broadcast("events_channel", { id: event.id, message: event.message, message_queue: event.message_queue, created_at: event.created_at })
    end
  rescue => e
    Rails.logger.error("Failed to consume message: #{e.message}")
  end
end
