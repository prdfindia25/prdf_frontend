import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prdf-blue text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.svg" alt="PRDF Logo" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold">PRDF</h3>
                  <p className="text-sm text-green-100">
                    Parameshwaram Research and Development Foundation
                  </p>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Dedicated to sustainable development through innovative
                research, community engagement, and environmental stewardship.
                Building a better future for generations to come.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-green-100">
                <p>
                  <span className="font-medium">Address:</span>
                  <br />
                  [Your Address Here]
                  <br />
                  [City, State, ZIP]
                </p>
                <p>
                  <span className="font-medium">Phone:</span>
                  <br />
                  +1 (555) 123-4567
                </p>
                <p>
                  <span className="font-medium">Email:</span>
                  <br />
                  info@prdf.org
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">
              © {currentYear} Parameshwaram Research and Development Foundation.
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
