Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root' 
  get '/api/photos', to: 'api/photos#all_photos', as: 'all_photos'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      collection do 
        post :search
      end
      resources :photos, only: [:index, :create, :edit, :update, :destroy, :show]
    end
    resource :session, only: [:create, :destroy]
  end

end