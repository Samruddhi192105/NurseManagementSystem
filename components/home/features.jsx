import React from 'react';
import { Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const cards = [
    {
      icon: <Zap className="text-emerald-500" size={24} />,
      title: "Lightning Fast",
      desc: "Get matched with qualified nurses in minutes, not hours. Our system works 24/7 to ensure rapid response times.",
      points: ["Real-time availability updates", "Instant notifications", "Automated scheduling"],
      bgColor: "bg-emerald-500"
    },
    {
      icon: <ShieldCheck className="text-indigo-500" size={24} />,
      title: "Quality Assured",
      desc: "Every nurse is rigorously vetted and continuously monitored to maintain the highest standards of care.",
      points: ["Background verification", "License validation", "Ongoing quality checks"],
      bgColor: "bg-indigo-500"
    },
    {
      icon: <Clock className="text-emerald-500" size={24} />,
      title: "Always Available",
      desc: "Our team and platform are here for you around the clock, ensuring support whenever you need it.",
      points: ["24/7 support line", "Emergency assistance", "Dedicated account manager"],
      bgColor: "bg-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
          <Clock size={14} /> Why Choose Us
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for Healthcare, Designed for Ease</h2>
        <p className="text-slate-500 text-lg">Experience the difference of a platform created specifically for healthcare staffing needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${card.bgColor} bg-opacity-10`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{card.desc}</p>
            
            <ul className="space-y-3">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 className="text-emerald-500" size={16} /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
