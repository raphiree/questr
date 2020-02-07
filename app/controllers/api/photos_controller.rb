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
      @photos = Photo.where(user_id: params[:user_id]).order(created_at: :desc)
      if @photos
        render 'api/photos/index'
      else
        render json: ['Unable to retrieve user images']
      end
    elsif params[:offset]
      @photos = Photo.order(created_at: :desc).offset(params[:offset]).limit(10)
      if @photos
        render 'api/photos/index'
      else
        render json: ['Unable to retreive images from database']
      end
    else
      @photos = Photo.order(created_at: :desc).limit(10)
      if @photos
        render 'api/photos/index'
      else
        render json: ['Unable to retreive images from database']
      end
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    @photo.num_views += 1
    @photo.save
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo.delete!
      render json: ['Photo Deleted']
    end
  end

  private

  def photo_params
    params.permit(:user_id, :image, :title, :caption, :num_views)
  end

end