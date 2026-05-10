'use client'

export default function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '$12.99',
      cover: '📚',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '$14.99',
      cover: '📖',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: '$13.99',
      cover: '📕',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: '$11.99',
      cover: '📗',
    },
  ]

  const categories = [
    { name: 'Fiction', icon: '✍️' },
    { name: 'Mystery', icon: '🔍' },
    { name: 'Science Fiction', icon: '🚀' },
    { name: 'Romance', icon: '💕' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to BookStore</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover your next favorite book from our curated collection
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Browse Books
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-6xl">
                  {book.cover}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{book.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
          <p className="text-gray-700 mb-6">Get 20% off on all orders over $50</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter for new releases and special offers
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-800"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
