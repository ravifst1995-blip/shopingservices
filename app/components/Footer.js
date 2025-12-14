import Link from "next/link";
import { Mail, Headphones, Truck, Tag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-links">
        <div>
          <ul>
            <li><Link href="/returns-exchanges">Returns & Exchanges</Link></li>
            <li><Link href="/payment-terms">Payment & Pricing</Link></li>
            <li><Link href="/terms-of-use">Terms Of Use</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <div className="brand">Print Digital Services</div>

        <div className="info">
          {/* <span><Headphones size={16} /> +0080 1234 56 789</span> */}
          <span><Truck size={16} /> Amounts over $100</span>
          <span><Tag size={16} /> Save up to 20%</span>
        </div>
      </div>

      <div className="copyright">
        © 2025 Print Digital Services. ALL RIGHTS RESERVED
      </div>
      </div>
    </footer>
  );
}
