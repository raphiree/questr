class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :title
      t.string :caption
      t.integer :num_views, null: false
      t.timestamps
    end
  end
end
