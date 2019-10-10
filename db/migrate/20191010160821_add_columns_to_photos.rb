class AddColumnsToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :height, :integer
    add_column :photos, :width, :integer
  end
end
