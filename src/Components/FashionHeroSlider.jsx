import React, { useEffect, useState } from "react";
const banners = [
  {
    id: 1,
    category: "Men’s Collection",
    title: "Modern Men’s Fashion",
    subtitle: "Stylish men’s clothing collection displayed in a modern fashion store.",
    discount: "UP TO 40% OFF",
    button: "SHOP MEN",
    image: "https://promiad.com/wp-content/uploads/2023/11/Top-Clothing-Brands-for-Men-in-Pakistan.jpg",
  },
  {
    id: 2,
    category: "WOMEN'S COLLECTION",
    title: "Style That Inspires",
    subtitle: "Discover elegant looks made for you.",
    discount: "UP TO 50% OFF",
    button: "SHOP WOMEN",
    image:"https://images.openai.com/static-rsc-4/4NkxAsnsAN_JzNcmFdOmzqaiO6mancBFdDtYTTyPX_M80oAQ2PpW02AJontF3Xt5-fuqYqev91KPbRypaVuh0eDXzbmEMJquWfmyTJll3KXMaQMIDrKQI2nWO8CcExoB-AE6PdAH6HozuMc3OFFzH69995vbHFIcwqJLDXGTwdgWTKyC6WqYCSvY5uc496Qj?purpose=fullsize",
  },
  {
    id: 3,
    category: "KIDS COLLECTION",
    title: "Little Stars",
    subtitle: "Cute, comfortable and stylish outfits for kids.",
    discount: "UP TO 35% OFF",
    button: "SHOP KIDS",
    image:
      "https://images.openai.com/static-rsc-4/rGHz9ncJU_mOLdP7noaxu0Gefs0yT_NnOG-84BThUCM9tCUJa62vy1dkWZjQZpwkp2HCyZSlqUoKfQd7hMzfVRugcs0iNk_xcGS_Xgvbcr1Dq8vYuAfvAUqckeAkFiXJocHZg0CjtqKSScBvLP072SJmYfafEUr42yjr70Z5F6bANH171k18O1nO1iubRkj0?purpose=fullsize",
  },
  {
    id: 4,
    category: "EID COLLECTION",
    title: "Celebrate in Style",
    subtitle: "Beautiful traditional outfits for your special moments.",
    discount: "EID SPECIAL OFFER",
    button: "SHOP EID",
    image:
      "https://images.openai.com/static-rsc-4/gyLl8bFUuBDeFtQubyED-aOSzz23zyYR-egocKV1pq_pLbmQy1gqk7vUbDxvyJiN6dBUNdKB-ElpdZwVIBx2fFN-SRbHfpb6V8mL-WoPsu6GewNrqCcAvktcdpQjuSNDKFNVrf3F9jfQbNLO8U5PUJ07SkH0ZWinB5f78lNjsjpAEVb124G9CKcQ0Kt9nt2t?purpose=fullsize",
  },
];

function FashionHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="fashion-slider">

      {/* Slides */}
      <div className="fashion-slides">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`fashion-slide ${
              index === current ? "fashion-slide-active" : ""
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="fashion-slide-image"
            />

            <div className="fashion-overlay"></div>

            <div className="fashion-content">

              <span className="fashion-category">
                {banner.category}
              </span>

              <h1>{banner.title}</h1>

              <p>{banner.subtitle}</p>

              <div className="fashion-discount">
                {banner.discount}
              </div>

              <button className="fashion-shop-btn">
                {banner.button}
              </button>

            </div>
          </div>
        ))}
      </div>


      {/* Bottom navigation */}
      <div className="fashion-navigation">

        <div className="fashion-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setCurrent(index)}
              className={`fashion-dot ${
                current === index ? "fashion-dot-active" : ""
              }`}
              aria-label={`Go to ${banner.category}`}
            ></button>
          ))}
        </div>

        <div className="fashion-counter">
          <span>0{current + 1}</span>
          <div className="counter-line"></div>
          <span>0{banners.length}</span>
        </div>

      </div>

      {/* Category quick navigation */}
      <div className="fashion-categories">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            className={current === index ? "category-active" : ""}
            onClick={() => setCurrent(index)}
          >
            {banner.category.replace("'S COLLECTION", "").replace(" COLLECTION", "")}
          </button>
        ))}
      </div>

    </section>
  );
}

export default FashionHeroSlider;