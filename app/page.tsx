// app/page.js
import Link from "next/link";
import { products } from "./data/products";
import HeroGraduationSection from './data/HeroGraduationSection'
import HeroBanner from './components/HeroBanner'

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      <HeroBanner />
      {/* <section className="hero-large">
        <div className="hero-large-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">New Season • New Tech</p>
            <h2 className="hero-heading">
              FIND GADGETS
              <br />
              THAT MATCH
              <br />
              YOUR STYLE
            </h2>
            <p className="hero-text">
              Browse through our curated range of laptops, PCs, and accessories,
              designed to fit your workflow and your lifestyle.
            </p>

            <Link href="/shop" className="hero-cta">
              Shop Now
            </Link>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-number">200+</span>
                <span className="hero-stat-label">Top Brands</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">20+</span>
                <span className="hero-stat-label">Curated Products</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">3000+</span>
                <span className="hero-stat-label">Happy Customers</span>
              </div>
            </div>
          </div>

      
          <div className="hero-right">
            <div className="hero-image-circle">
              <img
                src="/nextimage.jpg"  
                alt="Stylish gadgets"
                className="hero-main-image"
              />
            </div>

       
            <div className="hero-sparkle hero-sparkle-1" />
            <div className="hero-sparkle hero-sparkle-2" />
          </div>
        </div>
      </section> */}
{/* BRAND STRIP */}
{/* <section className="container brand-strip">
  <div className="container brand-strip-inner">
    <span className="brand-logo">VERSACE</span>
    <span className="brand-logo">ZARA</span>
    <span className="brand-logo">GUCCI</span>
    <span className="brand-logo">PRADA</span>
    <span className="brand-logo">Calvin Klein</span>
  </div>
</section> */}

      {/* FEATURED PRODUCTS (same as before) */}
      <section>
          <h3 className="style-section-title container">Featured Products</h3>
        <div className="product-grid container">
          {featured.map((product) => (
            <article key={product.id} className="product-card">
              <div>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
              </div>
              <div>
                <p className="product-price">${product.price}</p>
                <Link href="/shop" className="btn-primary">
                  View in Shop
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
<section className="style-section-wrapper ">
  <h3 className="style-section-title container">BROWSE BY DRESS STYLE</h3>

  <div className="style-grid container">
    <div
      className="style-card"
      style={{
        backgroundImage:
          "url('/h1-blog-img5.jpg')",
      }}
    >
      <span className="style-label">The Best Headphones For Music</span>
    </div>

    <div
      className="style-card"
      style={{
        backgroundImage:
          "url('/h1-blog-img4.jpg')",
      }}
    >
      <span className="style-label">Experience a New Type of Gaming	</span>
    </div>

    <div
      className="style-card"
      style={{
        backgroundImage:
          "url('/h1-blog-img2.jpg')",
      }}
    >
      <span className="style-label">The Best Games For Pc</span>
    </div>

    <div
      className="style-card"
      style={{
        backgroundImage:
          "url('/home-2-banner-5.png')",
      }}
    >
      <span className="style-label">Smart Watches</span>
    </div>
  </div>
</section>
<HeroGraduationSection />
    </div>
  );
}
