Chadder::Application.routes.draw do

  root to: "home#index"

  get "/trending" => "home#trending"

end