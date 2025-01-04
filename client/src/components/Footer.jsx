import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg">About Us</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
