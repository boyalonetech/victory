"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const url = "https://ik.imagekit.io/spitndu0j/victory";

export default function Home() {
  const [currentImageId, setCurrentImageId] = useState(1);

  useEffect(() => {
    // Set an initial random image on mount to avoid hydration mismatch
    const initialTimer = setTimeout(() => {
      setCurrentImageId(Math.floor(Math.random() * 20) + 1);
    }, 0);

    // The animation takes 10 seconds (from globals.css: welcome-popup 10s)
    const interval = setInterval(() => {
      setCurrentImageId(Math.floor(Math.random() * 20) + 1);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex flex-col gap-24 w-full pb-24">
      {/* --- WELCOME / HERO SECTION --- */}
      <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
        <div className="md:w-1/2 flex flex-col items-start gap-8 z-10">
          <div className="inline-block bg-white border border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="font-syne text-5xl md:text-[72px] leading-[1.05] font-extrabold tracking-[-0.04em] uppercase">
              Welcome to <br />
              VIJOMI.
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-medium bg-white border border-black p-4">
            Victory In Jesus Outreach Ministries <br />
            Of His Victorious Church Int&apos;l
          </p>
          <button className="border-2 border-black bg-black text-white font-extrabold rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1">
            Join Our Service
          </button>
        </div>

        <div className="md:w-1/2 relative h-[500px] w-full overflow-hidden border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Animated Image Container */}
          <div
            key={currentImageId}
            className="absolute inset-0 w-full h-full animate-welcome-popup"
          >
            <Image
              src={`${url}/image${currentImageId}.jpeg`}
              alt={`Welcome Image ${currentImageId}`}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="py-6 flex items-center select-none bg-white border-y-2 border-black overflow-hidden w-full">
        <div className="whitespace-nowrap flex animate-marquee">
          <span className="font-syne text-[5vw] font-extrabold uppercase tracking-[-0.02em] leading-none text-black mr-4">
            TURNING SINNERS TO GOD · BEING A SUCCOUR TO THE NEEDY · BUILDING A
            GODLY SOCIETY ·
          </span>
          <span className="font-syne text-[5vw] font-extrabold uppercase tracking-[-0.02em] leading-none text-black mr-4">
            TURNING SINNERS TO GOD · BEING A SUCCOUR TO THE NEEDY · BUILDING A
            GODLY SOCIETY ·
          </span>
        </div>
      </div>

      {/* --- ABOUT THE CHURCH --- */}
      <section id="about" className="w-full">
        <div className="bg-white border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-12 border-b-2 border-black pb-4">
            About The Church
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-syne text-2xl font-bold uppercase mb-4">
                Our Name
              </h3>
              <p className="text-lg font-medium border-l-4 border-black pl-4 mb-8">
                VICTORY IN JESUS OUTREACH MINISTRIES OF HIS VICTORIOUS CHURCH
                IN&apos;T (VIJOMI)
              </p>
            </div>
            <div>
              <h3 className="font-syne text-2xl font-bold uppercase mb-4">
                Aims & Objectives
              </h3>
              <ul className="list-decimal list-inside space-y-4 font-medium text-lg">
                <li className="border border-black p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                  To turn sinners to God through Jesus Christ and let them know
                  there is hope. (2 Cor 5:18)
                </li>
                <li className="border border-black p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                  To make believers in Christ have the sense of belonging of
                  being secured in faith.
                </li>
                <li className="border border-black p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                  Being a succour to the needy.
                </li>
                <li className="border border-black p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                  Helping in building a godly society.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE TIMES & LOCATION --- */}
      <section id="services" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black text-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase mb-8">
              Service Times
            </h2>
            <div className="space-y-6">
              <div className="border border-white/30 p-6">
                <h4 className="font-bold text-2xl mb-2">Sunday Worship</h4>
                <p className="text-xl">8:00 AM - 11:30 AM</p>
              </div>
              <div className="border border-white/30 p-6">
                <h4 className="font-bold text-2xl mb-2">
                  Wednesday Bible Study
                </h4>
                <p className="text-xl">5:30 PM - 7:30 PM</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase mb-8">
              Location
            </h2>
            <div className="h-full flex flex-col justify-start">
              <div className="text-2xl md:text-3xl font-extrabold uppercase leading-relaxed mb-8">
                73, Hospital Road, <br />
                Aba, <br />
                Abia State, <br />
                Nigeria.
              </div>
              <button className="mt-auto border-2 border-black bg-white text-black font-extrabold rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all w-fit">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ONLINE GIVING / DONATION --- */}
      <section id="giving" className="w-full">
        <div className="bg-[#f0f0f0] border-2 border-black p-8 md:p-16 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6">
            Online Giving
          </h2>
          <p className="text-xl font-medium max-w-2xl mx-auto mb-12">
            Your generous contributions support our aims of turning sinners to
            God, being a succour to the needy, and building a godly society.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="border-2 border-black bg-black text-white font-extrabold rounded-full px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
              Tithes & Offering
            </button>
            <button className="border-2 border-black bg-white text-black font-extrabold rounded-full px-10 py-4 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all">
              Special Donation
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACT PAGE PREVIEW --- */}
      <section id="contact" className="w-full">
        <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6 font-medium text-lg">
              <p>Email: info@vijomi.org</p>
              <p>Phone: 08036620838 / 07066842651</p>
              <p>Address: 73, Hospital Road, Aba, Abia State, Nigeria</p>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-16 bg-black text-white">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-transparent border-b-2 border-white/50 p-3 outline-none text-white focus:border-white uppercase placeholder-white/50 transition-colors"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent border-b-2 border-white/50 p-3 outline-none text-white focus:border-white uppercase placeholder-white/50 transition-colors"
              />
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="bg-transparent border-b-2 border-white/50 p-3 outline-none text-white focus:border-white uppercase placeholder-white/50 transition-colors resize-none"
              ></textarea>
              <button
                type="button"
                className="border-2 border-white bg-white text-black font-extrabold rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-transparent hover:text-white transition-all w-fit mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
