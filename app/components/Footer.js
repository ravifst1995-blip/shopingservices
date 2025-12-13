import Link from "next/link";
import { Mail, Headphones, Truck, Tag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>Privacy Policy</h4>
          <ul>
            <li><Link href="#">Returns & Exchanges</Link></li>
            <li><Link href="#">Payment Terms</Link></li>
            <li><Link href="#">Delivery Terms</Link></li>
            <li><Link href="#">Payment & Pricing</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4>Get Involved</h4>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Vision</Link></li>
            <li><Link href="#">Orders & Shipping</Link></li>
            <li><Link href="#">Office Supplies</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Customer Service</Link></li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#">Smartphones</Link></li>
            <li><Link href="#">Headphones</Link></li>
            <li><Link href="#">Laptop & Tablet</Link></li>
            <li><Link href="#">Monitors</Link></li>
            <li><Link href="#">Printers</Link></li>
            <li><Link href="#">Gadgets</Link></li>
          </ul>
        </div>

        <div>
          <h4>Customer Care</h4>
          <ul>
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Store Locator</Link></li>
            <li><Link href="#">Customer Service</Link></li>
            <li><Link href="#">Returns/Exchange</Link></li>
            <li><Link href="#">Product Support</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <div className="brand">Smart Digital Devices</div>

        <div className="info">
          {/* <span><Headphones size={16} /> +0080 1234 56 789</span> */}
          <span><Truck size={16} /> Amounts over $100</span>
          <span><Tag size={16} /> Save up to 20%</span>
        </div>
      </div>

      <div className="copyright">
        © 2025 Smart Digital Devices. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
