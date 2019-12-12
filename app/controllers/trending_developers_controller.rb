class TrendingDevelopersController < ApplicationController

  def index
    developers = GithubService.get_trending_developers(language: 'ruby')
    render json: developers, status: 200
  rescue SocketError, Timeout::Error
    render json: { message: 'can not fetch developers right now, try later'}, status: 500
  end
end
