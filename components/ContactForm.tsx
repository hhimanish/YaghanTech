"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ success?: boolean; error?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ error: data.message || "Submission failed" });
      }
    } catch (err:any) {
      setStatus({ error: err.message });
    }
  };

  return (
    <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {status.success && <p className="text-green-600">Message sent successfully!</p>}
      {status.error && <p className="text-red-600">Error: {status.error}</p>}
      <button
        type="submit"
        className="inline-block bg-primary text-surface hover:bg-primary/90 font-medium rounded-md px-6 py-3 transition"
      >
        Send Message
      </button>
    </form>
  );
}
