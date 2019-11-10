Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root' 

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index] do
      resources :comments, only: [:index, :create, :destroy]
    end
    resources :users, only: [:index, :create, :show] do
      collection do 
        post :search
      end
      resources :photos, only: [:index, :create, :edit, :update, :destroy, :show]
      resources :favorites, only: [:index, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end

end