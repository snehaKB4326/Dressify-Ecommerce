import React from "react";
// If you have a logo in assets, import as:
// import logo from "../assets/logo.png";
// For social icons, you can use react-icons or SVGs as shown

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand & Description */}
        <div className="md:w-1/3">
          {/* <img src={logo} alt="Logo" className="mb-3 w-32" /> */}
          <h2 className="text-xl font-bold mb-2">Dressify</h2>
          <p className="text-gray-400">Your destination for the latest trends in dresses. Shop quality, style, and elegance—all under one roof.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-1">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="mb-1">
              <a href="/collection" className="hover:underline">Collection</a>
            </li>
            <li className="mb-1">
              <a href="/about" className="hover:underline">About</a>
            </li>
            <li className="mb-1">
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul>
            <li className="mb-1">
              <a href="/faq" className="hover:underline">FAQ</a>
            </li>
            <li className="mb-1">
              <a href="/returns" className="hover:underline">Returns</a>
            </li>
            <li className="mb-1">
              <a href="/shipping" className="hover:underline">Shipping</a>
            </li>
            <li className="mb-1">
              <a href="/tracking" className="hover:underline">Order Tracking</a>
            </li>
          </ul>
        </div>
        {/* Contact Info & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@dressify.com</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +1 234 567 890</p>
          <div className="flex gap-3 mt-2">
            {/* Using SVGs here, you can also use react-icons */}
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400">
              <svg width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7a1 1 0 000 2h3v7a1 1 0 002 0v-7h2l.3-2h-2.3V7a3 3 0 013-3h3a1 1 0 100-2z"/></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-400">
              <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="4"/><rect x="2" y="2" width="16" height="16" rx="5"/><circle cx="15.5" cy="4.5" r="1"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300">
              <svg width="20" height="20" fill="currentColor"><path d="M20 6a8.1 8.1 0 01-2.3.6A4.1 4.1 0 0016.7 4a4 4 0 00-6.9 3c0 .3 0 .7.1 1A11.3 11.3 0 013 4.9a4 4 0 001.2 5.3c-.3 0-.5-.1-.8-.2v.1a4 4 0 003.2 3.9c-.2 0-.4.1-.6.1a2.3 2.3 0 01-.8-.1 4 4 0 003.7 2.7A8.1 8.1 0 012 18a11.3 11.3 0 006.3 1.9c7.5 0 11.7-6.2 11.7-11.6v-.5A7.6 7.6 0 0020 6z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Dressify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
