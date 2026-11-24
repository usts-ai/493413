import React from 'react';
import { motion } from 'framer-motion';
import { etapes } from '../data/mock';

const Timeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/75 backdrop-blur-md border border-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(42,58,74,0.06)]"
    >
      <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A] mb-1">Parcours du couple</h3>
      <p className="text-sm text-[#2A3A4A]/55 mb-6">Vos étapes depuis l’activation du coffret</p>

      <div className="relative">
        <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#98FF98] via-[#ADD8E6] to-[#E6E6FA]" />
        <ul className="space-y-4">
          {etapes.map((etape, i) => {
            const done = etape.statut === 'termine';
            const current = etape.statut === 'en_cours';
            return (
              <motion.li
                key={etape.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-4 sm:gap-5 pl-0"
              >
                <span
                  className={`relative z-10 mt-0.5 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    done
                      ? 'bg-[#98FF98] border-[#7EC8A3] text-[#2A3A4A]'
                      : current
                      ? 'bg-white border-[#ADD8E6] shadow-[0_0_0_6px_rgba(173,216,230,0.35)]'
                      : 'bg-white border-[#E6E6FA] text-[#2A3A4A]/35'
                  }`}
                >
                  {done ? (
                    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M7.6 13.2L3.9 9.5l-1.4 1.4 5.1 5.1 9.4-9.4-1.4-1.4z" />
                    </svg>
                  ) : current ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7EB6D9] animate-pulse" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-[#E6E6FA]" />
                  )}
                </span>
                <div
                  className={`flex-1 rounded-2xl px-4 py-3 transition-colors ${
                    current ? 'bg-gradient-to-r from-[#ADD8E6]/35 to-[#E6E6FA]/40' : 'bg-[#F5F5F5]/80'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <p className="font-semibold text-[#2A3A4A] text-sm sm:text-base">{etape.titre}</p>
                    <span className="text-xs text-[#2A3A4A]/45">{etape.date}</span>
                  </div>
                  {current && (
                    <p className="mt-1 text-xs text-[#2A3A4A]/60">Étape en cours — continuez à votre rythme</p>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Timeline;
