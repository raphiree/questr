Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root' 

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      collection do 
        post :search
      end
      resources :photos, only: [:new, :create, :edit, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show]
  end

end