source "https://rubygems.org"

ruby "3.4.1" # Set your Ruby version here

# Core Rails
gem "rails", "~> 8.0.2"

# Asset pipeline & frontend
gem "propshaft"
gem "jsbundling-rails"
gem "tailwindcss-rails"

# Hotwire
gem "turbo-rails"
gem "stimulus-rails"

# Web server
gem "puma", ">= 5.0"

# Database (change to 'pg' for production)
gem "sqlite3", ">= 2.1"

# API builder
gem "jbuilder"

# Background job, cache, cable
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

# Performance
gem "bootsnap", require: false

# Asset acceleration & deployment
gem "thruster", require: false
gem "kamal", require: false

# OS compatibility
gem "tzinfo-data", platforms: %i[windows jruby]

# --- Development & Test ---
group :development, :test do
  gem "debug", platforms: %i[mri windows], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end

# Uncomment if you need Active Storage variants for image processing
# gem "image_processing", "~> 1.2"
