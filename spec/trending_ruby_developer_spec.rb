require 'rails_helper'

describe ' get all the trending ruby developers on github', type: :request do
  it 'returns a status of 200' do
    get '/trending'

    expect(response).to have_http_status(:success)
  end

  it 'returns a json' do
    stub_github_request
    get '/trending'

    expect(JSON.parse(response.body).first.username).to eq('dhh')
  end


  def stub_github_request
    stub_request(:get, /github-trending-api.now/).
      with(headers: {'Accept'=>'*/*', 'User-Agent'=>'Ruby'}).
      to_return(status: 200, body: "stubbed response", headers: {})
  end
end