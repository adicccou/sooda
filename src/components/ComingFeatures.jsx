export default function ComingFeatures() {
  const upcomingFeatures = [
    { icon: '👥', title: 'Teams support' },
    { icon: '🛍️', title: 'Your online store' },
    { icon: '🌐', title: 'Web version' },
    { icon: '📊', title: 'Statistics' },
    { icon: '📦', title: 'Additional product properties' },
    { icon: '💱', title: 'Multi currency support' },
    { icon: '🌍', title: 'New languages' },
    { icon: '🌙', title: 'Dark theme' },
  ]

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gray-500 text-sm font-semibold">More to Explore</span>
          <h2 className="text-4xl font-bold text-gray-900">Coming in the near future</h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-8">
          {upcomingFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-blue-600 font-semibold italic">And so much more coming!</p>
        </div>
      </div>
    </section>
  )
}
