json.id photo.id
json.user_id photo.user_id
json.username photo.user.username
json.image_url url_for(photo.image) if photo.image.attached?
json.title photo.title
json.caption photo.caption
json.favorite_total photo.favorites.count
json.comment_total photo.comments.count
json.num_views photo.num_views
json.created_at photo.created_at
json.updated_at photo.updated_at