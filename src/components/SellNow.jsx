export default function SellNow() {
  const features = [
    {
      icon: '📊',
      title: 'Track your sales',
    },
    {
      icon: '📈',
      title: 'Daily reports',
    },
    {
      icon: '💰',
      title: 'Minimum selling price control',
    },
    {
      icon: '🔍',
      title: 'Scan your product or search',
    },
  ]

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Sell now</h3>
            <p className="text-gray-700 mb-8">
              Effortlessly manage your sales process from start to finish
            </p>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 text-blue-600 font-semibold hover:underline">
              More to Explore
            </button>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-lg max-w-sm">
              <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                <div className="text-sm font-semibold text-gray-700">Daily report</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold">USD 143.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cash</span>
                  <span className="font-semibold">USD 100.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Most Inv Sale</span>
                  <span className="font-semibold">USD 43.00</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-lg">📦</span>
                    <span className="text-gray-600">3063 (3/4) 3 Bluecard b...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mt-2">
                    <span className="text-lg">📦</span>
                    <span className="text-gray-600">Bluecard to Finish high...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mt-2">
                    <span className="text-lg">📦</span>
                    <span className="text-gray-600">3/3 Company, Panther Falk...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
