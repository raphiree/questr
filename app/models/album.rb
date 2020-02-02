class Album < ApplicationRecord

  validates :title, presence: true
  validates :user_id, presence: true
  validates :photo_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :photos,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Photo

end