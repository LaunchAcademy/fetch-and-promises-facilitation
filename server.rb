require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require "json"

set :bind, '0.0.0.0'

def write_to_json_file(location)
  # retrieve the existing JSON
  file = File.read("locations.json")
  # parse the JSON into a ruby array
  locations_array = JSON.parse(file)
  # determine the id of the soon to be persisted location by using the last location's id
  new_location_id = locations_array["locations"].last["id"] + 1

  # construct a hash that matches the pattern existing in the JSON file
  new_location = {
    id: new_location_id,
    city: location["city"],
    country: location["country"]
  }
  # add our new location data to the old location (in Ruby only, unpersisted)
  updated_locations = {
    locations: locations_array["locations"].concat([new_location])
  }

  # Either of these next two lines will work: pretty_generate just gives us line
  # breaks and indentation in our .json file (making it easier on the eyes)

  # updated_locations_json = JSON.pretty_generate(updated_locations, indent: ' ')

  updated_locations_json = updated_locations.to_json
  File.write("locations.json", updated_locations_json)
  return updated_locations
end

get "/" do
  erb :index
end

get "/message.json" do
  pizza = "tast pepperoni" 

  # prepare a response for our fetch request
  # response = Response.new
  # # response.status = 200 
  # response.content_type = "json"
  # response.body = stuff_array.to_json 

  # return response # goes to the .then of the fetch request
  content_type(:json)

  return pizza.to_json
end


# I guess the end point doesnt exist 
