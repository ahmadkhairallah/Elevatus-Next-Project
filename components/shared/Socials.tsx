import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Socials: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="bg-blue-900 p-3 rounded-full"
      >
        <FaLinkedin className="text-white " size={24} />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="bg-blue-400 p-3 rounded-full"
      >
        <FaTwitter className=" text-white" size={24} />
      </Link>
      <Link
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="bg-blue-600 p-3 rounded-full"
      >
        <FaFacebook className="text-white" size={24} />
      </Link>
    </div>
  );
};

export default Socials;
