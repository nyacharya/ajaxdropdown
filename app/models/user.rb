class User < ApplicationRecord
  belongs_to :country
  belongs_to :state
  belongs_to :district
end
