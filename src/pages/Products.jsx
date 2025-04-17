import { useState } from "react";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const products = [
    {
      id: 1,
      name: "Eclipta",
      images: [
        "/img/product-1.jpg",
        "/img/product-2.jpg",
        "/img/product-3.jpg",
      ],
      price: "$85.59",
      description:
        "A bold blend of contrast — shadow meets shimmer in this powerfully feminine design.",
      size: "large",
    },
    {
      id: 2,
      name: "Aurora Bloom",
      images: ["/img/product-4.jpg", "/img/product-5.jpg"],
      price: "$109.68",
      description: "Ultra-lightweight titanium frame with polarized lenses",
      size: "tall",
    },
    {
      id: 3,
      name: "Veloura",
      images: ["/img/product-6.jpg", "/img/product-7.jpg"],
      price: "$98.9",
      description:
        "Soft yet statement-making. A fabric story woven with elegance and intention.",
      size: "wide",
    },
    {
      id: 4,
      name: "Serein",
      images: ["/img/product-8.jpg", "/img/product-9.jpg"],
      price: "$78.99",
      description:
        "Named after the light evening mist — delicate, rare, and beautifully calm.",
      size: "medium",
    },
    {
      id: 5,
      name: "Luxeveil",
      images: ["/img/product-10.jpg", "/img/product-11.jpg"],
      price: "$450",
      description:
        "A soft, flowing masterpiece designed to make your everyday feel like a runway moment.",
      size: "medium",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-20">
      {showOrderForm ? (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-12">
          <div className="max-w-4xl w-full mx-auto">
            <video
              src="/videos/final buy/final-buy.mp4"
              autoPlay
              loop
              muted
              className="w-full mb-8 rounded-lg"
            />
            <form className="space-y-6 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-transparent border border-white text-white rounded-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-transparent border border-white text-white rounded-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-white text-black py-4 hover:bg-gray-200 transition-colors"
                >
                  Submit Order
                </button>
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 border border-white py-4 hover:bg-white hover:text-black transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : !selectedProduct ? (
        <div className="max-w-[2000px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="group cursor-pointer relative"
              >
                <div className="aspect-[3/4] relative overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-2xl font-light tracking-widest">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <p className="text-lg text-gray-400">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-[2000px] mx-auto px-4 md:px-12">
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-8 text-sm uppercase tracking-wider hover:text-gray-400 transition-colors"
          >
            ← Back to Products
          </button>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="lg:w-2/3">
              <div className="relative aspect-square lg:h-[80vh]">
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
                {selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? selectedProduct.images.length - 1
                            : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      ←
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % selectedProduct.images.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
                {selectedProduct.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProduct.name} ${index + 1}`}
                    className={`w-24 h-32 object-contain cursor-pointer transition-all ${
                      currentImageIndex === index
                        ? "ring-2 ring-white scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl font-light">
                {selectedProduct.name}
              </h1>
              <p className="text-2xl md:text-3xl">{selectedProduct.price}</p>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {selectedProduct.description}
              </p>
              <div className="pt-8">
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full bg-white text-black py-4 md:py-6 px-8 text-base md:text-lg hover:bg-gray-200 transition-colors"
                >
                  ORDER IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
