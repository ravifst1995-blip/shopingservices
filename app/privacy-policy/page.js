// app/about/page.js
export default function PrivacyPolicy() {
  return (
    <div className="container">
      <h2 className="section-title">Privacy Policy</h2>
      <div className="hero">
        <p>Your privacy is important to us.</p>

        <h3>Information We Collect</h3>
        <ul>
          <li>Name, email, phone number</li>
          <li>Shipping and billing address</li>
          <li>
            Payment details (processed securely via third-party gateways)
          </li>
        </ul>

        <h3>How We Use Your Information</h3>
        <ul>
          <li>To process orders and deliveries</li>
          <li>To provide customer support</li>
          <li>To improve our services and user experience</li>
        </ul>

        <h3>Data Protection</h3>
        <p>
          We use industry-standard security measures to protect your data.
          Personal information is never sold or shared with third parties except
          for order fulfillment.
        </p>
      </div>
    </div>
  );
}
