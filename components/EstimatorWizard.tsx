"use client";
import React, { useState } from 'react';

type Step = {
  title: string;
  content: React.ReactNode;
};

export default function EstimatorWizard() {
  const steps: Step[] = [
    {
      title: "Project Type",
      content: (
        <div className="space-y-4">
          <label className="block font-medium text-foreground">Select project type:</label>
          <select className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Web Application</option>
            <option>Mobile App</option>
            <option>AI/Automation</option>
            <option>Other</option>
          </select>
        </div>
      ),
    },
    {
      title: "Scope Details",
      content: (
        <div className="space-y-4">
          <label className="block font-medium text-foreground">Brief description of the project scope:</label>
          <textarea rows={4} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
      ),
    },
    {
      title: "Budget & Timeline",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-foreground">Budget range (USD):</label>
            <input type="text" placeholder="e.g., 5,000-10,000" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block font-medium text-foreground">Desired timeline:</label>
            <input type="text" placeholder="e.g., 3 months" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <div className="space-y-4">
          <label className="block font-medium text-foreground">Preferred technologies (comma separated):</label>
          <input type="text" placeholder="React, Node.js, AWS" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
      ),
    },
    {
      title: "Summary",
      content: (
        <div className="text-center">
          <p className="text-lg text-foreground/80">Review your inputs and submit to receive a personalized estimate.</p>
          <button className="mt-4 inline-block bg-primary text-surface hover:bg-primary/90 font-medium rounded-md px-6 py-3 transition">
            Submit Estimate
          </button>
        </div>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="max-w-2xl mx-auto p-6 bg-surface rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Project Estimator Wizard</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{steps[current].title}</h3>
        {steps[current].content}
      </div>
      <div className="flex justify-between mt-6">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {current < steps.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => Math.min(c + 1, steps.length - 1))}
            className="px-4 py-2 bg-primary text-surface rounded hover:bg-primary/90"
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-alt"
          >
            Finish
          </button>
        )}
      </div>
    </section>
  );
}
