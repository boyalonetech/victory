"use client";

import React, { useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="flex flex-col gap-12 w-full pb-24 h-full">
      <div className="bg-white border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 border-b-2 border-black pb-4">
          About Us
        </h1>
        <p className="text-xl font-medium mb-12 max-w-3xl">
          Welcome to VICTORY IN JESUS OUTREACH MINISTRIES OF HIS VICTORIOUS
          CHURCH IN&apos;T (VIJOMI). We are a community of believers dedicated to
          spreading the message of hope, faith, and salvation.
        </p>

        {/* Video Player */}
        <div
          className="w-full aspect-video bg-black border-2 border-black flex items-center justify-center relative group cursor-pointer mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-2 hover:translate-x-2 transition-all overflow-hidden"
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <video
              src="https://ik.imagekit.io/spitndu0j/victory/video.mp4?updatedAt=1779362496453"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="text-white font-syne text-2xl md:text-4xl font-extrabold uppercase tracking-widest z-10 group-hover:scale-110 transition-transform flex flex-col items-center gap-4">
                <span className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center pl-2">
                  ▶
                </span>
                Watch Our Story
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-12">
          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8 bg-black text-white hover:bg-white hover:text-black transition-colors">
              <h2 className="font-syne text-3xl font-bold uppercase mb-4">
                Our Mission
              </h2>
              <p className="text-lg font-medium leading-relaxed">
                To turn sinners to God through Jesus Christ and to let them know
                there is hope for them (2 Corinthians 5:18). We strive to be a
                succour to the needy and a light in our generation.
              </p>
            </div>
            <div className="border-2 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors">
              <h2 className="font-syne text-3xl font-bold uppercase mb-4">
                Our Vision
              </h2>
              <p className="text-lg font-medium leading-relaxed">
                Helping in building a godly society where believers in Christ
                have the sense of belonging and are fully secured in the faith.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mt-8 border-t-2 border-black pt-12">
            <h2 className="font-syne text-4xl font-extrabold uppercase mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border-2 border-black p-6 bg-white flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-syne text-2xl font-bold uppercase mb-2">
                  Faith
                </span>
                <p className="text-sm font-medium">Secured in Christ</p>
              </div>
              <div className="border-2 border-black p-6 bg-white flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-syne text-2xl font-bold uppercase mb-2">
                  Hope
                </span>
                <p className="text-sm font-medium">For the lost</p>
              </div>
              <div className="border-2 border-black p-6 bg-white flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-syne text-2xl font-bold uppercase mb-2">
                  Charity
                </span>
                <p className="text-sm font-medium">Succour to the needy</p>
              </div>
              <div className="border-2 border-black p-6 bg-white flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-syne text-2xl font-bold uppercase mb-2">
                  Community
                </span>
                <p className="text-sm font-medium">A godly society</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
