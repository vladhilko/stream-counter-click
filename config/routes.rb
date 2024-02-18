Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root 'events#index'

  resources :events, only: [:index] do
    collection do
      post :produce_kafka_event
    end
  end

end
