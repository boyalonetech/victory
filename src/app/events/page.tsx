import React from "react";

export default function Events() {
  return (
    <main className="flex flex-col gap-12 w-full pb-24 h-full">
      <div className="bg-white border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 border-b-2 border-black pb-4">
          Upcoming Events
        </h1>
        <p className="text-xl font-medium mb-12">
          Join us as we build a godly society together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors cursor-default group">
              <div className="font-syne text-2xl font-bold uppercase mb-2">Community Outreach</div>
              <div className="font-mono text-sm opacity-80 mb-4 group-hover:opacity-100">SATURDAY, 10:00 AM</div>
              <p className="font-medium">
                Turning sinners to God through our community service. Join the evangelism team.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
