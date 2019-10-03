class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def search
    verified = User.verify_username(user_params[:username])
    if verified
      render json: {username: user_params[:username]}
    else
      render json: ['Could not find user'], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end