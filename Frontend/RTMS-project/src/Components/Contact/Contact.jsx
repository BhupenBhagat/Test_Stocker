import React from 'react';

// ContactSection Component - Displays the contact form and details
const Contact1 = () => {
  return (
    <section id="Contact" className="py-16 bg-white text-center"> {/* Main container for the Contact Section */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading for the Contact Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>

        {/* Paragraph providing a brief introduction */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Have questions or need assistance? Feel free to reach out to us using the form below.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-left text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact1;