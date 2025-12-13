// app/about/page.js
export default function ReturnsExchanges() {
  return (
    <div className="container">
      <h2 className="section-title">Secure Payments Policy</h2>
      <div className="hero">
     <p>
          First Source Tech offers secure and flexible payment options for all
          customers.
        </p>

        <h3>Accepted Payment Methods</h3>
        <ul>
          <li>Credit & Debit Cards</li>
          <li>Net Banking</li>
          <li>UPI</li>
          <li>Wallets</li>
          <li>Bank Transfer (for approved business customers)</li>
        </ul>

        <h3>Payment Confirmation</h3>
        <ul>
          <li>Orders are processed only after successful payment confirmation.</li>
          <li>In case of payment failure, the order will not be placed.</li>
        </ul>

        <h3>Security</h3>
        <p>
          All payments are processed via encrypted and secure payment gateways.
          First Source Tech does not store your card or banking information.
        </p>
      </div>
    </div>
  );
}
