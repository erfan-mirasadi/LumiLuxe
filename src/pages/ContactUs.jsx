function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/final buy/final-buy.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-4xl md:text-6xl font-light mb-8 text-center">
              Let's Connect
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-light">Erfan Mirasadi</h2>
                  <p className="text-gray-400">Founder & Creative Director</p>
                </div>

                <div className="space-y-4">
                  {/* <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg">+98 507 354 2097</p>
                  </div> */}
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">erfan.mirasadi@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <p className="text-lg">www.iamerfan.me</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-gray-400 italic">
                    "Every piece tells a story, let's write yours together."
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white py-3 focus:outline-none focus:border-gray-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white py-3 focus:outline-none focus:border-gray-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-transparent border-b border-white py-3 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 hover:bg-gray-200 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
