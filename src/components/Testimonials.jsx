export default function Testimonials() {
  const testimonials = [
    {
      name: 'J1 NELSON',
      role: 'BUSINESS OWNER',
      text: 'Completely transformed the way I manage my inventory!',
      avatar: '👤',
    },
    {
      name: 'ROGER CALLEN',
      role: 'ENTREPRENEUR',
      text: 'This app is incredibly user-friendly and efficient, making it perfect for both beginners and experienced business owners. The interface is intuitive, which means I didn\'t have to spend hours learning how to use it. I love how all the tools I need inventory management, sales tracking are all in one place. It saves me so much time and effort, and I can focus more on growing my business instead.',
      avatar: '👤',
    },
    {
      name: 'MELISSA JOHNSON',
      role: 'MANAGER',
      text: 'I was skeptical at first, but after trying this app, I\'m blown away by how efficient it is. Sales tracking tools are simple and useful. I love how I can monitor my inventory and get insights into what\'s selling well. The support team is also fantastic, they\'re always there to help with any questions. This app is a must, have for small business owner',
      avatar: '👤',
    },
    {
      name: 'TRENT WALKER',
      role: 'ENTREPRENEUR',
      text: 'As a small business owner, managing inventory and sales was overwhelming. The intuitive interface and robust features make managing everything easy.',
      avatar: '👤',
    },
  ]

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">What Our Users Say</h2>
        <p className="text-gray-600 text-center mb-16">
          Satisfied users who have transformed their inventory and sales management experience with Sooda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-6">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5m8 0c3 0 7 1 7 8v8c0 1.25-4.716 5-7 5m0-15.5c.5 0 5 1.72 5 5.5s-4.5 5.5-5 5.5" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 h-20 overflow-hidden">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
