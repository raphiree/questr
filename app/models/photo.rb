class Photo < ApplicationRecord

  validates :title, length: { maximum: 64, allow_nil: true }
  validates :caption, length: { maximum: 256, allow_nil: true }
  validates :num_views, presence: true
  validates :user_id, presence: true

  has_one_attached :image

  belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
end