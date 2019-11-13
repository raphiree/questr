class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comm_params)
    if @comment.save
      render "api/comments/index"
    else
      render json: ['Invalid Comment']
    end
  end

  def index
    @comments = Comment.where(photo_id: params[:photo_id])
    render 'api/comments/index'
  end

  private

  def comm_params
    params.permit(:user_id, :photo_id, :comment)
  end

end