class AddGroupToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :group, :string
  end
end
