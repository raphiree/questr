def new
  image = Photo.new
  image.num_views = 0
  image.user_id = params(:id)
  render json: 
end

