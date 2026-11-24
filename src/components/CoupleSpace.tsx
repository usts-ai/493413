import React from 'react';
import { motion } from 'framer-motion';
import { activitesCouple, couple } from '../data/mock';

const CoupleSpace: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white shadow-[0_12px_40px_rgba(42,58,74,0.07)] min-h-[280px]"
      >
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
          alt="Couple Naëlya"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A3A4A]/85 via-[#2A3A4A]/35 to-transparent" />
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
          <p className="text-[#98FF98] text-xs font-semibold uppercase tracking-widest mb-2">Espace partagé</p>
          <h3 className="font-[Fraunces] text-2xl sm:text-3xl text-white mb-2">
            {couple.partenaireA} & {couple.partenaireB}
          </h3>
          <p className="text-white/75 text-sm max-w-xs">
            Un lieu intimiste pour suivre ensemble votre chemin vers la parentalité.
          </p>
          <div className="mt-4 flex -space-x-3">
            <img
              src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=120&q=80"
              alt={couple.partenaireA}
              className="h-11 w-11 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=120&q=80"
              alt={couple.partenaireB}
              className="h-11 w-11 rounded-full border-2 border-white object-cover"
            />
            <span className="h-11 w-11 rounded-full border-2 border-white bg-[#ADD8E6] text-[#2A3A4A] text-xs font-bold flex items-center justify-center">
              +
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="lg:col-span-3 rounded-3xl bg-white/75 backdrop-blur-md border border-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(42,58,74,0.06)]"
      >
        <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A] mb-1">Fil du duo</h3>
        <p className="text-sm text-[#2A3A4A]/55 mb-5">Activités récentes partagées</p>
        <ul className="space-y-3">
          {activitesCouple.map((act, i) => (
            <motion.li
              key={act.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex gap-3 sm:gap-4 rounded-2xl bg-[#F5F5F5]/90 p-3 sm:p-4 border border-white"
            >
              <img
                src={act.avatar}
                alt={act.auteur}
                className="h-11 w-11 rounded-2xl object-cover shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <p className="font-semibold text-sm text-[#2A3A4A]">{act.auteur}</p>
                  <span className="text-[11px] text-[#2A3A4A]/40 whitespace-nowrap">{act.heure}</span>
                </div>
                <p className="text-sm text-[#2A3A4A]/65 leading-snug">{act.texte}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default CoupleSpace;
