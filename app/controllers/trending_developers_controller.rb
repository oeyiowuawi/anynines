class TrendingDevelopersController < ApplicationController

  def index
    render json: { message: 'all developers' }, status: 200
  end
end
