import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-500 py-24 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-12">
        <div className="flex-1 text-white text-left">
          <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            Free to Use
          </span>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Manage Inventory and Sales with ease
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Join our early adopter waitlist, for priority access
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded bg-blue-400 placeholder-blue-200 text-white flex-1 max-w-sm"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 flex items-center gap-2"
            >
              Subscribe 🚀
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-3xl p-6 max-w-sm mx-auto shadow-2xl">
            <div className="bg-gray-100 rounded-2xl p-4 mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">9:41</div>
            </div>
            <div className="text-blue-600 font-bold text-2xl mb-8 text-center">sooda</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <span className="font-semibold text-gray-900">Sell now</span>
                </div>
                <span>›</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded hover:bg-yellow-100 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="font-semibold text-gray-900">Statistics</span>
                </div>
                <span className="bg-yellow-200 text-yellow-900 text-xs px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <span className="font-semibold text-gray-900">Products</span>
                </div>
                <span>›</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded hover:bg-yellow-100 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛍️</span>
                  <span className="font-semibold text-gray-900">Online Store</span>
                </div>
                <span className="bg-yellow-200 text-yellow-900 text-xs px-2 py-1 rounded">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
