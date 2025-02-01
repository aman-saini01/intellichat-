import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 BeyondChats. All Rights Reserved.</p>
        <div className="space-x-6 mt-4">
          <a href="https://twitter.com" className="hover:text-#5E35B1">Twitter</a>
          <a href="https://linkedin.com" className="hover:text-#5E35B1">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
