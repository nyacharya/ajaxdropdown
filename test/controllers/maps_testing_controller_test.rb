require 'test_helper'

class MapsTestingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get maps_testing_index_url
    assert_response :success
  end

end
