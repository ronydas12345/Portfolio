'use client';

import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset the success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="w-full min-h-screen bg-white py-20 px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-6xl font-bold text-black mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-12">
          Have a project or question? I'd love to hear from you. Send me a message!
        </p>

        {submitted && (
          <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-lg">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-950"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-950"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-lg font-semibold text-black mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-950"
              placeholder="Project inquiry"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-950 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-slate-950 text-white text-lg font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6">Other Ways to Reach Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-black mb-2">Email</h4>
              <a href="mailto:dasrony231@gmail.com" className="text-blue-600 hover:underline">
                dasrony231@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">LinkedIn</h4>
              <a href="#" className="text-blue-600 hover:underline">
                linkedin.com/in/raunakdas
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">GitHub</h4>
              <a href="https://github.com/ronydas12345" className="text-blue-600 hover:underline">
                github.com/ronydas12345
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
