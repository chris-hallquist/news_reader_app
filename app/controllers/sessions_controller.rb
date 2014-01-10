class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(*params[:user].values)
    if @user
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    User.find_by
  end
end
