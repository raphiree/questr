

1. Click on upload icon
2. Links to "/upload" page
  - Upload page allows click and drag, or "add" button
3. Upon adding a photo, the photo shows up as delay
  1. photo = Photo.new
  2. attach image to Photo
  3. preview all temporary photo objects' images


[Step_3]
  rails console:
    post = Photo.new
    post.image.attach(io: File.open("/url/something.jpg"), filename: "something.jpg")

    this will attach the photo as the image
    post.image.attached == true

[Step_4]
  rails route
    resources posts show
    
    PostsController =>
      def show
        @post = Post.find(params[:id])
        render :show
      end
    
    show.html.erb
      <%= @post.title %>
      <img src="<% url_for(@post.photo)" alt="">

[Step_5] Show in react
  rails routes - API namespace with json default (done already?)
  views > api > posts > index.json.jbuilder
    json.array! @posts do |post|
      json.extract! post, :id, :title
      json.photoUrl.url_for(post.photo)
    end

  fetchPosts(all photos)
    array of objects with id/photourl/title
  PostIndex posts=(this.state.posts{})

[Step_6] Upload and preview
  <input type="file" 
    onChange={this.handleFile.bind(this)}
  />

  handleFile(e) {
    debugger => e.currentTarget.files = array of files
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  state = {  photoFile: null }

[Step_7] AJAX requests
  handleSubmit(e) {
    const formData = new FormData();
    formData.append('post[title]', this.state.title)
    formData.append('post[photo]', this.state.photoFile)
  }

  add to strong params, ":photo"

  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false,
  })

  create controller
  post = Post.new(post_params)
  if post.save
    the usual
  else
    error
  end

[Step_8] PREVIEW
  this.state = { photoURL: null }
  handleFile(e) {
    const file =e.currentTarget.files[0]
    const fileReader = newFileReader();
    fileReader.onloadend = () => {
      setState({photoFile: file, photoUrl: fileReader.result}) <--move-->
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render: const preview = this.state.photoRul : <img src={this.state.photoUrl} />

[Others]
  Only append if file
  custom validation in model
    validate :ensure_photo

    def ensure_photo
      unless self.photo.attached?
        errors[:photo] << "Must be attached"
      end
