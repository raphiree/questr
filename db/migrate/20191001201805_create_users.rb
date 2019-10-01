class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.integer :age, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end
