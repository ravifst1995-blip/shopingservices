// app/contact/page.js
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you can call API route later: fetch("/api/contact", {...})
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  return (
    <div className="container">
  <h3 className="style-section-title container">Contact Us</h3>
      <div className="form-card">
        {submitted && (
          <p style={{ marginBottom: 12, color: "green", fontSize: 14 }}>
            Thank you! Your message has been recorded (demo only).
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              required
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
            />
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
