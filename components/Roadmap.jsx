import React from "react";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div id="roadmap" className="w-full lg:h-screen p-2">
      <div className="max-w-[1250px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#c23c3c]">
          Roadmap
        </p>
        <h2 className="py-4">Our goals</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid justify-center items-start">
              <div>
                <h2>Q3</h2>
              </div>
              <div className="py-2 m-auto items-start justify-center text-[12px]">
                <p>
                  (i) Genesis launchpad and DEX in place as a key part of Kava.
                  Buy at a fair launch with 0 team allocation and immediately
                  farm your $Horus at a chain-leading APR while also getting
                  your share of all transaction fees generates
                </p>

                <p>
                  (ii) The Big Bang of Kava - Participate in leading projects
                  launching through Horus Finance . Several ways to launch (ie
                  auction, genesis pool, overflow) will be available to suit
                  different team`&#39;`s needs. Launched protocols go through rigorous
                  due diligence to ensure we only provide the best opportunities
                  to you
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid justify-center items-start">
              <div>
                <h2>Q4</h2>
              </div>
              <div className="py-2 m-auto items-start justify-center text-[12px]">
                <p>
                  (i) Multiple farming ops - New pools to generate attractive
                  APRs and farm key tokens of Kava are consistently added. You
                  can not only farm launchpad tokens post launch, new
                  partnerships guarantee a stream of new pools and investment
                  opportunities
                </p>

                <p>
                  (ii) Fluid Staking - Stake your $KAVA & $HORUS in our native
                  pools with a validator. Generate additional APR while
                  supporting the system`&#39;`s stability.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid justify-center items-start">
              <div>
                <h2>2023 - Future</h2>
              </div>
              <div className="py-2 m-auto items-start justify-center text-[12px]">
                <p>
                  (i) HORUS DAO - Decide on the future of the protocol through
                  an owner- centric DAO structure – you own $HORUS, so you
                  should also be able to drive key decisions through stake-based
                  democratic voting
                </p>

                <p>
                  (ii) Prediction Betting - Will $Kava be above or below $5 in
                  the next 5 minutes? Place money where your conviction is in a
                  fun way with Ra Betting while we further push through the
                  roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
