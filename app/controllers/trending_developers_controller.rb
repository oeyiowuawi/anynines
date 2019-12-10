class TrendingDevelopersController < ApplicationController

  def index
    developers = GithubService.get_trending_developers(language: 'ruby')
    render json: developers, status: 200
  end
end
