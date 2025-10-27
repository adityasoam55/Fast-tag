import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img
                src="/logo.png"
                alt="FASTag Logo"
                className="w-10 h-10 rounded-md"
              />
              <h1 className="text-xl font-bold text-blue-600">
                FASTag Recharge
              </h1>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fast, secure, and reliable recharge platform for your FASTag
              accounts. Simplify your toll payments and keep your journeys
              smooth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-gray-800 font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Recharge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-gray-800 font-semibold mb-3">Support</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-gray-800 font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} FASTag Recharge. All rights reserved.
          </p>
          <p>
            Built with ❤️ by{" "}
            <span className="text-blue-600 font-medium">Aditya Som</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
