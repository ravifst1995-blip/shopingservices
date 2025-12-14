// app/about/page.js
export default function PaymentTerms() {
  return (
    <div className="container aboutContent">
        <h3 className="style-section-title container">Payment & Pricing Policy </h3>
      <div className="hero">
      <h3>Product Pricing</h3>
        <ul>
          <li>
            All prices listed are in INR and inclusive of applicable taxes unless
            stated otherwise.
          </li>
          <li>Prices are subject to change without prior notice.</li>
        </ul>

        <h3>Discounts & Offers</h3>
        <ul>
          <li>Promotional discounts are valid for a limited time.</li>
          <li>Offers cannot be combined unless specified.</li>
        </ul>

        <h3>Billing Accuracy</h3>
        <p>
          If an incorrect price is displayed due to a technical error, First
          Source Tech reserves the right to cancel the order and issue a full
          refund.
        </p>
      </div>
    </div>
  );
}
