Rails.application.routes.draw do
  root 'fixed#top'
  get 'fixed/index',to: 'fixed#index' 
  get 'fixed/show', to: 'fixed#show'
  get '/', to: 'fixed#top'
  end
