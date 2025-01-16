import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => { 
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Toàn Báo</h3>
            <p className="text-gray-400">
              Lập trình viên Full-Stack có trụ sở tại Việt Nam, chuyên về phát triển web và phần mềm.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Toàn Báo. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <button
              onClick={() => openInNewTab('https://www.facebook.com/toan.chuthe.1')}
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </button>
            <button
              onClick={() => openInNewTab('https://twitter.com/')}
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => openInNewTab('https://www.linkedin.com/')}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={() => openInNewTab('https://github.com/Toan2121051176/')}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
