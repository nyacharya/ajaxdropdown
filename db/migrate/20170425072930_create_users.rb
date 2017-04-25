class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.references :country, foreign_key: true
      t.references :state, foreign_key: true
      t.references :district, foreign_key: true

      t.timestamps
    end
  end
end
