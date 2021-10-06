require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require "json"

set :bind, '0.0.0.0'

get "/" do
  # binding.pry
  erb :index
end

get "/api/v1/pizza" do
  pizza = "tasty pepperoni" 
  # binding.pry
  # EFFECTIVELY WHAT IS HAPPENING
  # prepare a response for our fetch request
  # response = Response.new
  # # response.status = 200 
  # response.content_type = "json"
  # response.body = stuff_array.to_json 

  # return response # goes to the .then of the fetch request
  content_type(:json)
  return pizza.to_json
end