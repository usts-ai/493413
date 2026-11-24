import React from 'react';
import { motion } from 'framer-motion';
import { rappels } from '../data/mock';

const colors = {
  haute: { bg: 'from-[#E8A87C]/40 to-[#E8A87C]/15', dot: '#E8A87C' },
  moyenne: { bg: 'from-[#ADD8E6]/50 to-[#ADD8E6]/15', dot: '#7EB6D9' },
  basse: { bg: 'from-[#E6E6FA]/70 to-[#E6E6FA]/20', dot: '#B8A9D4' },
};

const Reminders: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/75 backdrop-blur-md border border-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(42,58,74,0.06)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
        <div>
          <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A]">Rappels & notifications</h3>
          <p className="text-sm text-[#2A3A4A]/55 mt-1">Gardez le fil de votre accompagnement</p>
        </div>
        <button
          type="button"
          className="self-start sm:self-auto text-xs font-semibold uppercase tracking-wider text-[#2A3A4A] bg-[#98FF98]/50 hover:bg-[#98FF98] px-4 py-2 rounded-full transition-colors"
        >
          Nouveau rappel
        </button>
      </div>

      <ul className="space-y-3">
        {rappels.map((r, i) => (
          <motion.li
            key={r.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.01 }}
            className={`flex items-center gap-4 rounded-2xl bg-gradient-to-r ${colors[r.priorite].bg} p-4 border border-white/80`}
          >
            <span
              className="h-3 w-3 rounded-full shrink-0 shadow-sm"
              style={{ background: colors[r.priorite].dot }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-[#2A3A4A] truncate">{r.titre}</p>
              <p className="text-xs text-[#2A3A4A]/55 mt-0.5">{r.quand}</p>
            </div>
            <button
              type="button"
              className="shrink-0 text-xs font-medium text-[#2A3A4A]/70 hover:text-[#2A3A4A] bg-white/70 hover:bg-white px-3 py-2 rounded-xl transition-colors"
            >
              Voir
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Reminders;
