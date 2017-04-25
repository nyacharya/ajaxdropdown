Rails.application.routes.draw do
  get 'maps_testing/index'

  resources :users
  resources :districts
  resources :states
  resources :countries
  resources :products do
    get "delete"
  end
  get '/users/updatestates/:id', to: 'users#updatestates'
  get '/users/updatedistrict/:id', to: 'users#updatedistrict'
  root to: "products#index"
  resources :maps_testing
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
