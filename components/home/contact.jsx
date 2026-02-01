import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    // section bg changed to a very light blue tint
    <section id="contact" className="py-20 bg-[#f0f9ff] px-6"> 
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-cyan-600 px-4 py-1 rounded-full text-xs font-bold mb-4 shadow-sm border border-cyan-100">
            <Phone size={14} /> Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">We're Here to Help</h2>
          <p className="text-slate-500">Have questions or need assistance? Our friendly team is ready to support you.</p>
        </div>

        {/* Two-Column Form Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Contact Info */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <Phone size={20} />, color: "bg-cyan-50 text-cyan-500", label: "Phone", val: "+1 (800) 555-6877", sub: "24/7 Support Line" },
                { icon: <Mail size={20} />, color: "bg-blue-50 text-blue-500", label: "Email", val: "support@nexteracode.com", sub: "We reply within 1 hour" },
                { icon: <MapPin size={20} />, color: "bg-purple-50 text-purple-500", label: "Address", val: "123 Healthcare Plaza", sub: "New York, NY 10001" },
                { icon: <Clock size={20} />, color: "bg-green-50 text-green-500", label: "Hours", val: "24/7 Platform Access", sub: "Office: Mon-Fri, 8AM-6PM" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{item.label}</p>
                    <p className="text-slate-600 text-sm">{item.val}</p>
                    <p className="text-xs text-slate-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows="4" placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-[#00c2a8] hover:bg-[#00ab94] text-white font-bold py-4 rounded-xl shadow-md transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Small & Centered CTA Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00b4d8] to-[#00c2a8] rounded-[2rem] p-10 md:p-14 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-cyan-50 max-w-lg mx-auto mb-8 text-base">
              Join hundreds of healthcare facilities that trust NextEra Code for their nurse staffing needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-[#00b4d8] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-cyan-50 transition-all">
                Request Nurses Now <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
