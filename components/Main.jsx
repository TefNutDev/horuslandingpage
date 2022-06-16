import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn, FaMedium, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets Buidl!
          </p>
          <h1 className="py-4 text-gray-700">
            We are <span className="text-[#c13737df]"> HORUS FINANCE</span>
          </h1>
          <h2 className="py-2 text-gray-700">EVM Co-Chain DEX & Launchpad</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            powered by Kava
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href='https://medium.com/@horusfinanceteam/a-glance-at-kava-and-horus-finance-as-your-access-point-to-participate-in-true-innovation-441b629b4d3c' className="rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaMedium />
            </a>
            <a href='https://discord.gg/twsPUSHkep' className="rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaDiscord />
            </a>
            <a href='https://twitter.com/Horus_Finance' className="rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter />
            </a>
          </div>
          <a href="../assets/HORUSWHITEPAPER.pdf" download="HORUS_WHITEPAPER">
              <button className="py-2 px-2 m-auto rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">Download Whitepaper</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
