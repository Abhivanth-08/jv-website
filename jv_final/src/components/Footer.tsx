
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">J.V. Enterprises</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for manufacturing and service solutions since 2009. Delivering precision engineering across India and globally.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-gray-300 hover:text-primary transition-colors">
                  Our Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Manufacturing" className="text-gray-300 hover:text-primary transition-colors">
                  Manufacturing Solutions
                </Link>
              </li>
              <li>
                <Link to="/products?category=Service" className="text-gray-300 hover:text-primary transition-colors">
                  Equipment Service
                </Link>
              </li>
              <li>
                <Link to="/products?category=Spare Parts" className="text-gray-300 hover:text-primary transition-colors">
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link to="/products?category=Custom Solutions" className="text-gray-300 hover:text-primary transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link to="/products?category=Maintenance" className="text-gray-300 hover:text-primary transition-colors">
                  Maintenance Programs
                </Link>
              </li>
              <li>
                <Link to="/products?category=Consultancy" className="text-gray-300 hover:text-primary transition-colors">
                  Engineering Consultancy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  JV Enterprises<br />
                  No-08/149 Ganapathy Puthur 8th Street<br />
                  Ganapathy, Coimbatore<br />
                  Tamil Nadu, India - 641006
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mobile: +91 97906 50162</p>
                  <p>Office: +91 96556 10162</p>
                  <p>Landline: 0422-2536162</p>
                  <p>Sales & Service: +91 96557 70162</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">edm@jventerprises.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} J.V. Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
