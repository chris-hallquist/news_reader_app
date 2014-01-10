class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: user
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end
end
