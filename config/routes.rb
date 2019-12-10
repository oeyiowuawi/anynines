Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/trending', to: 'trending_developers#index'
  root 'home#index'
end
