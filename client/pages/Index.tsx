import { useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setName("");
      setMessage("");
      setSubmitted(false);
    }, 2000);
  };

  const galleryItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F2e7418c9a72e40caa0a1de13da81536a?format=webp&width=800",
      title: "Elegant Yellow",
      color: "Gold & Black",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fb4ca2d44309e4d6298424fb1f70c78a0?format=webp&width=800",
      title: "Burgundy Statement",
      color: "Wine Red Formal",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fb7970d033f6d413788c22a50e04ae8f4?format=webp&width=800",
      title: "Casual Chic",
      color: "Black & White",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Ff39d142fc3534ef88f613a9977b9c976?format=webp&width=800",
      title: "Urban Style",
      color: "Monochrome",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fac3cace1adde4ababbec02dbe1a91ea9?format=webp&width=800",
      title: "Luxe Gold",
      color: "Gold & Cream",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F39dc45074f184615b94432d1b9e55913?format=webp&width=800",
      title: "Nature Green",
      color: "Teal & Olive",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F75f11e1e8f934f71bf6ede8d253a9f9b?format=webp&width=800",
      title: "Garden Vibes",
      color: "Green Botanical",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F46d69000d9f24b61b25079253ef0ae23?format=webp&width=800",
      title: "Minimalist Chic",
      color: "Cream & Muted",
    },
  ];

  const services = [
    {
      icon: "✨",
      title: "Styling Consultation",
      description: "Personalized hijab styling advice tailored to your preferences and lifestyle",
    },
    {
      icon: "📸",
      title: "Photo Sessions",
      description: "Professional photography showcasing your unique hijab looks and style evolution",
    },
    {
      icon: "🎨",
      title: "Color Coordination",
      description: "Expert guidance on color combinations and outfit pairings that complement your complexion",
    },
    {
      icon: "👗",
      title: "Wardrobe Planning",
      description: "Curated wardrobe suggestions for different seasons and occasions",
    },
    {
      icon: "💎",
      title: "Accessory Selection",
      description: "Personalized recommendations for jewelry and accessories to complete your look",
    },
    {
      icon: "🌟",
      title: "Confidence Coaching",
      description: "Build confidence in your style choices with expert guidance and support",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Hijab Stories</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-accent transition">
                Home
              </a>
              <a href="#gallery" className="text-foreground hover:text-accent transition">
                Gallery
              </a>
              <a href="#services" className="text-foreground hover:text-accent transition">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition">
                Contact
              </a>
            </div>
            <button className="md:hidden">
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Celebrate Your Unique Style
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover the art of modest fashion and express yourself with confidence through expertly
                coordinated hijab styles tailored to your personality and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition transform hover:scale-105">
                  Book Consultation
                </button>
                <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/5 transition">
                  Explore Gallery
                </button>
              </div>
            </div>
            <div className="animate-slide-in-left">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fac3cace1adde4ababbec02dbe1a91ea9?format=webp&width=800"
                alt="Featured Style"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Welcome to Hijab Stories, where modest fashion meets modern style. We believe that hijab
              is not just a religious practice, but a powerful form of self-expression and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We empower individuals to express their unique style through thoughtfully curated hijab
                  looks that celebrate modesty, confidence, and personal authenticity.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-bold text-primary mb-3">Expert Styling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of experienced stylists combines cultural appreciation with modern fashion
                  trends to create looks that are both timeless and contemporary.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold text-primary mb-3">Community Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We celebrate diversity and believe that beauty comes in many forms. Every style is
                  unique, and we're here to help you discover yours.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F2e7418c9a72e40caa0a1de13da81536a?format=webp&width=800"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Style Gallery</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collection of hijab styles and modest fashion looks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <p className="text-amber-200 text-sm">{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of styling services designed to enhance your confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-50 to-amber-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mt-8">
              Ready to transform your style? Reach out to us for consultations, bookings, or inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg animate-fade-in">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">contact@hijabstories.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">New York, NY</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your styling needs..."
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition transform hover:scale-105"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hijab Stories</h3>
              <p className="text-white/70">Celebrating modesty, style, and confidence.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Styling Consultation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Photo Sessions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Color Coordination
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Hijab Stories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
