require 'rails_helper'

describe ' get all the trending ruby developers on github', type: :request do
  it 'returns a status of 200' do
    stub_github_request
  
    get '/trending'

    expect(response).to have_http_status(:success)
  end

  it 'returns a json' do
    stub_github_request
  
    get '/trending'

    expect(JSON.parse(response.body).first['username']).to eq('dhh')
  end


  def stub_github_request
      stub_request(:get, "https://github-trending-api.now.sh/developers?language=ruby").
      with(
        headers: {
        'Accept'=>'*/*',
        'User-Agent'=>'HTTPClient/1.0 (2.8.3, ruby 2.6.3 (2019-04-16))'
        }).
      to_return(status: 200, body: github_response.to_json, headers: {})
  end

  def github_response
    [
      {
        "name"=>"David Heinemeier Hansson",
        "username" => "dhh",
        "type" =>  "user",
        "avatar" => "https://avatars0.githubusercontent.com/u/xxxx",
        "repo" =>  {"name" => "repository name",
            "description" => "project description",
            "url" => "https://github.com/username/project"
          }
      },
    ]
  end
end