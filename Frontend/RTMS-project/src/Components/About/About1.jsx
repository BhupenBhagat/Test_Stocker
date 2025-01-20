// Import necessary dependencies
import React from 'react';

// AboutSection Component - Displays information about the platform
const About1 = () => {
  return (
    <section id="About" className="py-16 bg-gray-100 text-center"> {/* Main container for the About Section */}
      <div className="max-w-3xl mx-auto"> {/* Flex container to hold the content */}
        {/* Heading for the About Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        
        {/* Paragraph providing details about the platform */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to our Real-Time Monitoring System for Online Exams. Our platform ensures
          fair and secure online exams by monitoring activity in real-time and enforcing 
          rules to prevent cheating. Designed for reliability and efficiency, we aim to 
          provide a seamless experience for both students and administrators.
        </p>

        {/* Optional CTA (Call-To-Action) button */}
        <button
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert('Learn More Clicked!')}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About1;