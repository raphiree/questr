class Api::PhotosController < ApplicationController

  def create
    @image = Photo.new(photo_params)
    if @image.save
      render json: ['Successfully uploaded'], status: 200
    else
      render json: ['Upload failed']
    end
  end

  def index
    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
      if @photos
        render 'api/photos/index'
      else
        render json: ['Unable to retrieve user images']
      end
    else
      @photos = Photo.order(created_at: :desc).all
      if @photos
        render 'api/photos/index'
      else
        render json: ['Unable to retreive images from database']
      end
    end
  end

  private

  def photo_params
    params.permit(:user_id, :image, :title, :caption, :num_views, :height, :width)
  end

end