import React from "react";

export default function Sermons() {
  return (
    <main className="flex flex-col gap-12 w-full pb-24 h-full">
      <div className="bg-white border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 border-b-2 border-black pb-4">
          Sermons
        </h1>
        <p className="text-xl font-medium mb-12 max-w-3xl">
          Listen to life-transforming messages from VICTORY IN JESUS OUTREACH MINISTRIES OF HIS VICTORIOUS CHURCH IN&apos;T. Let the word of God build your faith.
        </p>

        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-2 border-black p-6 bg-white flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-[#f0f0f0] transition-colors group">
              <div className="w-full md:w-48 aspect-video bg-black flex items-center justify-center border-2 border-black">
                <span className="text-white font-syne font-bold uppercase">Play Video</span>
              </div>
              <div className="flex-1">
                <div className="font-syne text-2xl font-bold uppercase mb-2">The Hope in Christ</div>
                <div className="font-mono text-sm opacity-80 mb-2">AUGUST 20, 2024 • PASTOR ARTHUR U.</div>
                <p className="font-medium line-clamp-2">
                  Discover how turning to God through Jesus Christ brings an unfailing hope to the weary soul, drawing from 2 Corinthians 5:18.
                </p>
              </div>
              <button className="border-2 border-black bg-white text-black font-extrabold px-6 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all whitespace-nowrap group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
