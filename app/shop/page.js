// app/shop/page.js
"use client";

import { useState } from "react";
import { products } from "../data/products";

export default function ShopPage() {
  const [category, setCategory] = useState("All");

  // popup state
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  function openEnquiry(product) {
    setEnquiryProduct(product);
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: `I would like to enquire about "${product.name}".`,
    });
  }

  function closeEnquiry() {
    setEnquiryProduct(null);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Enquiry submitted:", {
      product: enquiryProduct,
      ...form,
    });
    setSubmitted(true);

    // In real project you would call an API route here:
    // await fetch("/api/enquiry", { method: "POST", body: JSON.stringify({...}) });

    // You can choose to close popup after submit:
    // closeEnquiry();
  }

  return (
    <div className="container">
      <h2 className="section-title">Shop</h2>
      <p style={{ marginBottom: 12, color: "#6b7280", fontSize: 14 }}>
        Filter by category or browse all products. Click <strong>Add to Cart</strong> to send an enquiry.
      </p>

      {/* Category Filter */}
      <div className="badge-row ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="badge"
            style={{
              border:
                category === cat ? "1px solid #111827" : "1px solid transparent",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="product-grid">
        {filtered.map((product) => (
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
              <button
                className="btn-primary"
                type="button"
                onClick={() => openEnquiry(product)}
              >
                Add to Cart / Enquire
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Enquiry Popup */}
      {enquiryProduct && (
        <div className="modal-backdrop" onClick={closeEnquiry}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <div className="modal-header">
              <h3 className="modal-title">Product Enquiry</h3>
              <button className="modal-close" onClick={closeEnquiry}>
                ×
              </button>
            </div>

            <p className="modal-subtitle">
              Fill the form below and we will contact you with price & availability.
            </p>

            <p className="modal-product">
              Product: <strong>{enquiryProduct.name}</strong> (${enquiryProduct.price})
            </p>

            {submitted && (
              <p style={{ color: "green", fontSize: 13, marginBottom: 8 }}>
                Thank you! Your enquiry has been recorded (demo only).
              </p>
            )}

            <form className="modal-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="enq-name">Name</label>
                <input
                  id="enq-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="enq-email">Email</label>
                <input
                  id="enq-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="enq-phone">Phone</label>
                <input
                  id="enq-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label htmlFor="enq-message">Message</label>
                <textarea
                  id="enq-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleFormChange}
                />
              </div>

              <button type="submit" className="btn-primary">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
