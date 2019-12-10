class GithubService
  def self.get_trending_developers(language:)
    request = HTTPClient.get("https://github-trending-api.now.sh/developers?language=#{language}")
    JSON.parse(request.body)
  end
end