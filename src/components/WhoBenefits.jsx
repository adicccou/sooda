export default function WhoBenefits() {
  const benefitCards = [
    {
      title: 'Any small business',
      description: 'Ideal for small businesses just starting out and looking to minimize operational costs',
      icon: '🏢',
      bgColor: 'bg-gradient-to-b from-gray-400 to-gray-700',
    },
    {
      title: 'Wholesale businesses',
      description: 'A smart choice for wholesale startups focused on reducing expenses',
      icon: '📦',
      bgColor: 'bg-white',
      hasImage: true,
    },
    {
      title: 'Own production',
      description: 'Manage small-scale and hand production operations',
      icon: '🏭',
      bgColor: 'bg-gradient-to-b from-gray-400 to-gray-700',
    },
    {
      title: 'Online sales',
      description: 'Tailored for online trading businesses looking to streamline processes',
      icon: '🛍️',
      bgColor: 'bg-gradient-to-b from-gray-400 to-gray-700',
    },
  ]

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Who benefits from Sooda?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefitCards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgColor} rounded-2xl p-6 text-white text-center flex flex-col justify-between min-h-56`}
            >
              {card.hasImage && (
                <div className="mb-4 flex justify-center">
                  <div className="text-6xl">📦</div>
                </div>
              )}
              <div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm opacity-90">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
