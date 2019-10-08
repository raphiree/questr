class Api::PhotosController < ApplicationController

  def create
    @image = Photo.new(photo_params)
    if @image.save
      render json: ['good stuff'], status: 200
    else
      render json: ['bad stuff']
    end
  end

  def index
    @photos = Photo.where(user_id: params[:id])
    if @photos
        render '/api/users/:user_id/photos'
  end

  private

  def photo_params
    params.permit(:user_id, :image, :title, :caption, :num_views)
  end

end