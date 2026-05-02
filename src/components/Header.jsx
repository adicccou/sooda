export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b">
      <div className="text-2xl font-bold text-blue-600">sooda</div>
      <nav className="flex items-center gap-6">
        <a href="#help" className="text-gray-700 hover:text-gray-900">Help</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact us</a>
        <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          🍎 Apple Store
        </button>
        <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          ▶ Google Play
        </button>
      </nav>
    </header>
  )
}
