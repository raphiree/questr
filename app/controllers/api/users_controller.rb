class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      if user_params[:password].length < 6
        render json: ['Passwords need to be 6 or more characters'], status: 411
      elsif User.find_by(username: user_params[:username])
        render json: ['Username already taken'], status: 409
      else
        render json: ['Something went wrong'], status: 406
      end
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