const { Link } = ReactRouterDOM;

// HomePage Component
function HomePage() {
  const features = [
    {
      title: "Nissan Military Program",
      description: "Big savings on top of all current offers for those who've protected our country. Print your certificate and access exclusive deals.",
      icon: "🏅"
    },
    {
      title: "Nissan College Grad Program",
      description: "Turn your diploma into big savings and exclusive incentives. Get your certificate and visit a Nissan store for your new ride.",
      icon: "🎓"
    },
    {
      title: "Nissan Service Offers & Coupons",
      description: "Keep your Nissan rolling with the best service deals. Enjoy complimentary inspections, coupons, and worry-free maintenance.",
      icon: "🔧"
    },
    {
      title: "Financing & Leasing",
      description: "Take advantage of Nissan's customizable financing options and use our payment calculator to budget your costs.",
      icon: "💳"
    },
    {
      title: "Request A Quote",
      description: "Get personalized quotes from local dealers. Submit your information and a Nissan dealer will contact you shortly.",
      icon: "📝"
    },
    {
      title: "Local Dealers",
      description: "Find all Nissan dealers in your area. Enter your zip code to view offers and locate the nearest dealership.",
      icon: "📍"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="py-4 text-white bg-blue-600">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold">Welcome to Our Nissan Rogue Website</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex-grow px-4 py-8 mx-auto">
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-semibold">Discover the 2026 Nissan Rogue</h2>
          <p className="mb-6 text-lg text-gray-700">
            Explore exclusive deals, special offers, incentives, and rebates on the all-new 2026 Rogue. Visit your local Southern California Nissan Dealer today!
          </p>
          <Link
            to="/services"
            className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            View Services
          </Link>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h3 className="mb-8 text-3xl font-bold text-center">Special Offers & Features</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="mb-4 text-2xl font-semibold">Ready to Get Started?</h3>
          <p className="mb-6 text-lg text-gray-700">Filter offers by zip code and request a quote today.</p>
          <Link
            to="/cars"
            className="inline-block px-6 py-3 mr-4 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
          >
            Explore Cars
          </Link>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-white transition bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            Learn More About Us
          </Link>
        </section>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="py-4 text-white bg-gray-800">
        <nav className="container flex justify-center px-4 mx-auto space-x-8">
          <Link to="/" className="transition hover:text-blue-300">Home</Link>
          <Link to="/services" className="transition hover:text-blue-300">Services</Link>
          <Link to="/about" className="transition hover:text-blue-300">About</Link>
          <Link to="/cars" className="transition hover:text-blue-300">Cars</Link>
        </nav>
      </footer>
    </div>
  );
}