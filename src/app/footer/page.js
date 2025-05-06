import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet turpis in libero viverra laoreet.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 555-123-4567</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Follow Us</h3> */}
            {/* <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.662 9.157 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.476 1.481-3.834 3.779-3.834 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.214 0-1.595.759-1.595 1.53v2.025h2.69l-.439 2.895H12.458v6.988C18.338 21.157 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.32-4.053 11.495-11.495 11.495-2.282 0-4.402-.661-6.186-1.809.316.038.635.058.961.058 1.812 0 3.487-.619 4.801-1.643-1.684-.03-3.094-1.142-3.597-2.663.221.043.442.067.669.067.392 0 .758-.051 1.103-.149-1.756-.353-3.042-1.928-3.042-3.794.463.235.949.372 1.461.38.878 0 1.689-.292 2.287-.794-1.799-.037-3.487-.947-4.577-2.467 1.559.484 3.242.767 4.977.806-1.613-1.066-2.783-2.936-2.783-4.965 0-1.093.291-2.145.825-3.042 1.667 2.043 4.133 3.388 6.865 3.533-.216-.824-.334-1.685-.334-2.576 0-6.122 5.974-11.102 11.102-11.102 3.024 0 5.734 1.225 7.658 3.211-1.057-.034-2.054-.329-2.979-.825.938.293 1.83.875 2.585 1.664-.611-.013-1.198-.243-1.741-.477.587.577 1.417 1.345 2.323 2.146z"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 013.662 3.662c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-3.662 3.662c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-3.662-3.662c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 013.662-3.662c.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zm0 2.16c-2.834 0-5.131 2.297-5.131 5.131 0 2.834 2.297 5.131 5.131 5.131 2.834 0 5.131-2.297 5.131-5.131 0-2.834-2.297-5.131-5.131-5.131z"
                    clipRule="evenodd"
                  />
                  <path
                    d="M12.315 5.485a6.834 6.834 0 100 13.668 6.834 6.834 0 000-13.668z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M17.588 6.107a1.051 1.051 0 11-2.102 0 1.051 1.051 0 012.102 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;