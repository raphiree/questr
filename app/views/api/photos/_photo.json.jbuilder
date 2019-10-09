json.id photo.id
json.user_id photo.user_id
json.image_url url_for(photo.image) if photo.image.attached?
json.title photo.title
json.caption photo.caption
json.num_views photo.num_views
json.created_at photo.created_at
json.updated_at photo.updated_at