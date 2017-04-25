class District < ApplicationRecord
  belongs_to :country
  belongs_to :state
end
