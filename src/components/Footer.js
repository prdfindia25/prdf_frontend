import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prdf-footer">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.svg" alt="PRDF Logo" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold">PRDF</h3>
                  <p className="text-sm opacity-90">
                    Parameshwaram Research and Development Foundation
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
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
                    className="opacity-90 hover:opacity-100 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="opacity-90 hover:opacity-100 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="opacity-90 hover:opacity-100 transition-colors"
                  >
                    Research and Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="opacity-90 hover:opacity-100 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="opacity-90 hover:opacity-100 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-90">
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
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © {currentYear} Parameshwaram Research and Development Foundation.
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-colors"
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
