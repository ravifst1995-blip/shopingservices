// app/about/page.js
export default function AboutPage() {
  return (
    <div className="container">
      <h2 className="section-title">About TechStore</h2>
      <div className="hero">
        <p style={{ fontSize: 15, lineHeight: 1.6 }}>
          TechStore is a demo ecommerce project built with Next.js. 
          It showcases a simple online electronics shop with laptops, PCs, 
          monitors and more.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6 }}>
          You can use this project as a base for your own ecommerce application:
          add authentication, real products, payment gateway (Stripe, Razorpay, etc.)
          and a real cart/checkout flow.
        </p>
      </div>
    </div>
  );
}
