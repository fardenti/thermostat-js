# frozen_string_literal: true

require 'sinatra/base'
require 'json'

class Temperature < Sinatra::Base
  enable :sessions

  get '/' do
    @last_value = if session[:temperature].nil?
                    20
                  else
                    session[:temperature]
                  end
    erb :index
  end

  post '/temperature' do
    session[:temperature] = params[:temperature].to_i
  end

  run! if app_file == $PROGRAM_NAME
end
