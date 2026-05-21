import React from "react";

export default function Prayer() {
  return (
    <main className="flex flex-col gap-12 w-full pb-24 h-full">
      <div className="bg-[#f5f5f5] border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 border-b-2 border-black pb-4">
          Prayer Request
        </h1>
        <p className="text-xl font-medium mb-12">
          Submit your prayer request. We believe in the power of corporate prayer.
        </p>

        <form className="flex flex-col gap-8 max-w-2xl bg-white p-8 border-2 border-black">
          <div className="flex flex-col gap-2">
            <label className="font-syne font-bold uppercase text-sm">Full Name</label>
            <input type="text" className="border-b-2 border-black p-2 outline-none focus:border-b-4 transition-all bg-transparent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-syne font-bold uppercase text-sm">Email Address</label>
            <input type="email" className="border-b-2 border-black p-2 outline-none focus:border-b-4 transition-all bg-transparent" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-syne font-bold uppercase text-sm">Your Prayer Request</label>
            <textarea rows={5} className="border-2 border-black p-4 outline-none focus:border-4 transition-all resize-none bg-transparent"></textarea>
          </div>
          <button type="button" className="border-2 border-black bg-black text-white font-extrabold rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 mt-4">
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
