class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :message
      t.string :message_queue

      t.timestamps
    end
  end
end
