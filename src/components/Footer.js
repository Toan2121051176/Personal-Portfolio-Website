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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0662282781477!2d105.7725698!3d21.0700169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552fa8723d05%3A0x5ee2b56189f2dc9c!2zMzkgUC4gVmnDqm4sIEPhu5UgTmh14bq_LCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1737001155571!5m2!1svi!2s"/>

    </footer>
  );
};

export default Footer;
