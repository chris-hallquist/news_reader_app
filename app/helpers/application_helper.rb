module ApplicationHelper

  def current_user
    @current_user ||= user.find_by_session_token(session[:session_token])
  end

  def login!(user)
    user.reset_session_token
    user.save!
  end

  def logout!(user)
    @current_user = nil
    user.session_token = nil
    user.save!
  end

end
