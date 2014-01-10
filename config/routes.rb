NewReader::Application.routes.draw do

  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  resources :users

  resource :session

  root to: "feeds#index"
end
