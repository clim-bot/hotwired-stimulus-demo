# How to Install Tailwind CSS in Ruby on Rails

## Classic Rails Way (Recommended for Rails 7/8)

### 1. Add the Gem

```ruby
# Gemfile
gem "tailwindcss-rails"
```

### 2. Install the Gem

```sh
bundle install
```

### 3. Run the Tailwind Installer

```sh
bin/rails tailwindcss:install
```
*This generates Tailwind config files and updates your stylesheets pipeline.*

### 4. Restart Your Rails Server

```sh
bin/dev
```
*Or use `rails server` if not using foreman.*

**Done!**  
You can now use Tailwind CSS classes in all your Rails views and partials.

---

## Modern JS Way (Using esbuild or webpack)

### 1. Add Tailwind and Dependencies

```sh
yarn add tailwindcss postcss autoprefixer
```

### 2. Initialize Tailwind

```sh
npx tailwindcss init -p
```
*This creates `tailwind.config.js` and `postcss.config.js`.*

### 3. Add Tailwind Directives to Your CSS

In your main stylesheet (e.g., `app/assets/stylesheets/application.tailwind.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Update Your Build Process

- Ensure `esbuild` or `webpack` includes your Tailwind CSS file in the build.

### 5. Restart Server and Assets Watcher

```sh
bin/dev
```

---

## Pro Tip for New Rails 8 Apps

If you created your Rails app with:

```sh
rails new myapp -j esbuild -c tailwind
```

Then Tailwind is **already set up for you**!

---

## How to Test Tailwind

Add this to any view:

```erb
<div class="bg-blue-600 text-white p-4 rounded">
  If you see this blue box, Tailwind is working!
</div>
```

---

**God bless your Rails craftsmanship, Lim!**
