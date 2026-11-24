import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/mock';

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, i) => {
        const pct = Math.round((stat.valeur / stat.total) * 100);
        return (
          <motion.article
            key={stat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-white p-4 sm:p-5 shadow-[0_12px_40px_rgba(42,58,74,0.06)]"
          >
            <div
              className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-40 blur-2xl"
              style={{ background: stat.accent }}
            />
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#2A3A4A]/55 font-semibold mb-2">
              {stat.label}
            </p>
            <p className="font-[Fraunces] text-3xl sm:text-4xl text-[#2A3A4A] leading-none mb-3">
              {stat.valeur}
              <span className="text-lg text-[#2A3A4A]/40">{stat.suffix}</span>
            </p>
            <div className="h-1.5 rounded-full bg-[#2A3A4A]/08 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}cc)` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-[#2A3A4A]/45">
              {pct}% de l’objectif
            </p>
          </motion.article>
        );
      })}
    </div>
  );
};

export default StatCards;
