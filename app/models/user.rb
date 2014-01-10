class User < ActiveRecord::Base
  attr_accessible :name, :password_digest, :session_token
  has_secure_password

  def find_by_credentials(name, pass)
    user = User.find_by_name(name)
    user.try(:authenticate, pass) if user
  end

  def reset_session_token
    user.session_token = SecureRandom::urlsafe_base64(16)
  end
end
