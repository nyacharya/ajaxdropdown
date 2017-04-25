json.extract! user, :id, :name, :email, :country_id, :state_id, :district_id, :created_at, :updated_at
json.url user_url(user, format: :json)
