require 'rails_helper'

describe ' get all the trending ruby developers on github', type: :request do
  it 'returns a status of 200' do
    get '/trending'

    expect(response).to have_http_status(:success)
  end
end