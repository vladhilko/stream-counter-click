require 'karafka/web'

Rails.application.routes.draw do
  mount Karafka::Web::App, at: '/karafka'

  root 'events#index'

  resources :events, only: [:index] do
    collection do
      post :produce_kafka_event
    end
  end
end
