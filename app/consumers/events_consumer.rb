class EventsConsumer < ApplicationConsumer
  def consume
    messages.each do |message|
      Event.create!(
        message: message.payload['message'],
        message_queue: 'kafka'
      )
    end
  rescue => e
    Rails.logger.error("Failed to consume message: #{e.message}")
  end
end
