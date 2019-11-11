class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(fav_params)
    if @favorite.save
      @favorites = Favorite.where(user_id: params[:user_id])
      render "api/favorites/index"
    else
      render json: ['Favorite Failed']
    end
  end

  def index
    @favorites = Favorite.where(user_id: params[:user_id])
    render "api/favorites/index"
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    if @favorite.delete
      render "api/favorites/index"
    else
      render json: ['Removal failed']
    end
  end

  private

  def fav_params
    params.permit(:user_id, :photo_id)
  end

end