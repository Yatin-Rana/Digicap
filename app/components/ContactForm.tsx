// app/contact/ContactForm.tsx
'use client'

import React, { useState } from 'react';

interface ContactFormProps {
  submitContact: (formData: FormData) => Promise<{ success: boolean; message: string }>;
}

export default function ContactForm({ submitContact }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    setSubmitStatus(result.message);
    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Message"
          rows={5}
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          disabled={submitStatus === 'Submitting...'}
        >
          {submitStatus === 'Submitting...' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitStatus && (
        <p className={`mt-4 text-center ${submitStatus.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
          {submitStatus}
        </p>
      )}
    </form>
  );
}
