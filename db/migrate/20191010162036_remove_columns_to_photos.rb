class RemoveColumnsToPhotos < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :height
    remove_column :photos, :width
  end
end
