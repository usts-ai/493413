import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cartes } from '../data/mock';

const CardGallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const active = cartes.find((c) => c.id === selected);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
        <div>
          <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A]">Cartes numériques</h3>
          <p className="text-sm text-[#2A3A4A]/55 mt-1">Prolongez l’expérience de votre coffret physique</p>
        </div>
        <p className="text-xs text-[#2A3A4A]/45">{cartes.length} thèmes disponibles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartes.map((carte, i) => (
          <motion.button
            key={carte.id}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelected(carte.id)}
            className="group text-left rounded-[1.75rem] overflow-hidden bg-white/80 border border-white shadow-[0_12px_40px_rgba(42,58,74,0.07)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADD8E6]"
          >
            <div className="relative h-40 sm:h-44 overflow-hidden">
              <img
                src={carte.image}
                alt={carte.titre}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A3A4A]/55 to-transparent" />
              <span
                className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-[#2A3A4A]"
                style={{ background: carte.couleur }}
              >
                {carte.theme}
              </span>
              <span className="absolute bottom-3 right-3 text-xs text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {carte.duree}
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="font-[Fraunces] text-lg text-[#2A3A4A] leading-snug mb-1.5">{carte.titre}</h4>
              <p className="text-sm text-[#2A3A4A]/60 line-clamp-2">{carte.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Fermer"
              className="absolute inset-0 bg-[#2A3A4A]/45 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden bg-white shadow-2xl"
            >
              <div className="relative h-52">
                <img src={active.image} alt={active.titre} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="px-6 pb-8 -mt-8 relative">
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-[#2A3A4A] mb-3"
                  style={{ background: active.couleur }}
                >
                  {active.theme} · {active.duree}
                </span>
                <h4 className="font-[Fraunces] text-2xl text-[#2A3A4A] mb-2">{active.titre}</h4>
                <p className="text-[#2A3A4A]/70 text-sm leading-relaxed mb-6">{active.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-2xl bg-[#2A3A4A] text-white py-3.5 text-sm font-medium hover:bg-[#3D5166] transition-colors"
                  >
                    Commencer l’exercice
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="flex-1 rounded-2xl bg-[#F5F5F5] text-[#2A3A4A] py-3.5 text-sm font-medium hover:bg-[#E6E6FA] transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardGallery;
