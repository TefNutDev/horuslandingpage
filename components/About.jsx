import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#c23c3c]">
            About
          </p>
          <h2 className="py-4">We is buidlrs</h2>
          <p className="py-2 text-gray-600">
            Horus Finance is a KAVA microcosm in the making with the goal to
            enhance Kava’s usage and volume on chain. Get a sneak peek on some
            of what $HORUS seeks to bring to market on $KAVA: GameFi, money
            markets, peer-to-peer swaps, in-depth financial derivatives, a
            decentralized VC. By partnering with budding protocols seeking to
            build on Kava, Horus will be able to provide marketing, liquidity,
            and community support, while you can get access to attractive
            launches and farming pools. By being the bedrock upon which this is
            all built, $KAVA and $HORUS will stand to gain significantly. To be
            a partner to all parts of $KAVA and to cement the promise that
            $HORUS will be continuously developed, Horus Finance launches
            through a fairlaunch – NO presales, NO hidden unlock cliffs, NO team
            allocation
          </p>
        </div>
        <div className="w-full m-auto shadow-xl shadow-gray-120 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={siteimg1}
            alt="/"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
