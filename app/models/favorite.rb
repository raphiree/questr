class Favorite < ApplicationRecord

  validates :user_id, presence: true
  validates :photo_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

end