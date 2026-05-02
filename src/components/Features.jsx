export default function Features() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gray-500 text-sm font-semibold">Features</span>
          <h2 className="text-4xl font-bold text-gray-900">Sooda app features</h2>
        </div>

        {/* Sales Management */}
        <div className="grid grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Managment</h3>
            <p className="text-gray-700 mb-6">
              Track your sales effortlessly and stay updated on performance in real time. Monitor and analyze your sales data to boost business growth
            </p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>SAT TOTALS</span>
                <span>₹</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>UAE</span>
                <span>USD 142.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Coff</span>
                <span>USD 105.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Sub Inventory</span>
                <span>USD 43.00</span>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">📦</span>
                <span className="font-semibold text-gray-900">Scan Product</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-lg">📷</span>
                <span>Scan Barcode: 12XMX</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <span className="inline-block bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Coming Soon
            </span>
            <h3 className="text-2xl font-bold mb-4">Personal Online Store</h3>
            <p className="mb-8">
              Launch your e-commerce store in minutes without coding and design skills.
            </p>
            <div className="flex justify-center items-end gap-4">
              <div className="bg-blue-500 rounded-lg w-24 h-32"></div>
              <div className="bg-white rounded-lg w-32 h-40"></div>
              <div className="bg-yellow-400 rounded-lg w-20 h-24"></div>
            </div>
          </div>
        </div>

        {/* Statistics and Products Inventory */}
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-yellow-400 rounded-2xl p-8">
            <span className="inline-block bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Coming Soon
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Statistics</h3>
            <p className="text-gray-900 font-semibold mb-6">
              Powerful analytics and stats are on their way
            </p>
            <div className="flex justify-center items-end gap-4 h-32">
              <div className="w-16 h-24 bg-white rounded opacity-30"></div>
              <div className="w-12 h-16 bg-blue-600 rounded"></div>
              <div className="w-12 h-20 bg-blue-600 rounded"></div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Products Inventory</h3>
            <p className="text-gray-700 mb-6">
              Stay organized with real-time updates on your inventory levels. A comprehensive solution for managing your products inventory
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span className="text-sm">Brain Heureaks</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Generate Increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
