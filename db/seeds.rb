Card.destroy_all

titles = [
  "Welcome to Hotwired!",
  "Turbo Drive is Fast",
  "Stimulus Loves Simplicity",
  "Cards are Reusable",
  "Build with Tradition",
  "Modern Rails UI",
  "Try Hotwire Today",
  "Faith & Family First",
  "Classic Ruby Strength"
]

bodies = [
  "Hotwired combines Turbo and Stimulus for rich, interactive Rails apps.",
  "Page navigation and updates are seamless and speedy with Turbo.",
  "Stimulus controllers let you sprinkle in JavaScript easily and respectfully.",
  "Cards help you display content in an organized and visually appealing way.",
  "Good code stands the test of time, just like traditional values.",
  "With Hotwire and Tailwind, you get modern style and classic reliability.",
  "This demo is proof that Rails can always stay relevant and robust.",
  "Faith and family are at the heart of everything we do.",
  "Ruby makes building joyful and productive—like a well-ordered home."
]

titles.shuffle.each_with_index do |title, idx|
  Card.create!(
    title: title,
    body: bodies[idx % bodies.length]
  )
end

puts "Seeded #{Card.count} demo cards."
