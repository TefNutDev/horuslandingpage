import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaDiscord, FaMedium, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import swap from "./../public/assets/swap.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#c23c3c]">
          Contact
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-3 w-full h-full shadow-xl shadow-gray-120 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={swap}
                  alt="/"
                />
              </div>
              <div></div>

              <div>
                <p className="uppercase pt-8">
                  Connect with us, community is key.
                </p>
                <div className="flex items-center justify-between py-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
