import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { progressionHebdo, couple } from '../data/mock';

const radarData = [
  { axe: 'Connexion', valeur: 78, couleur: '#7EC8A3' },
  { axe: 'Dialogue', valeur: 76, couleur: '#B8A9D4' },
  { axe: 'Présence', valeur: 82, couleur: '#7EB6D9' },
  { axe: 'Soutien', valeur: 70, couleur: '#E8A87C' },
  { axe: 'Équilibre', valeur: 65, couleur: '#98FF98' },
];

const ProgressChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3 rounded-3xl bg-white/75 backdrop-blur-md border border-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(42,58,74,0.06)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
          <div>
            <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A]">Évolution du duo</h3>
            <p className="text-sm text-[#2A3A4A]/55 mt-1">Connexion, bien-être & dialogue sur 8 semaines</p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#7EC8A3]" />Connexion</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#7EB6D9]" />Bien-être</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#B8A9D4]" />Dialogue</span>
          </div>
        </div>
        <div className="h-56 sm:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressionHebdo} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gConnexion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7EC8A3" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#7EC8A3" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gBienEtre" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7EB6D9" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#7EB6D9" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gDialogue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B8A9D4" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#B8A9D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3A4A12" />
              <XAxis dataKey="semaine" tick={{ fill: '#2A3A4A88', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#2A3A4A66', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: '1px solid #fff',
                  background: 'rgba(255,255,255,0.95)',
                  boxShadow: '0 8px 24px rgba(42,58,74,0.1)',
                  fontSize: 12,
                }}
              />
              <Area type="monotone" dataKey="connexion" name="Connexion" stroke="#7EC8A3" strokeWidth={2.5} fill="url(#gConnexion)" />
              <Area type="monotone" dataKey="bienEtre" name="Bien-être" stroke="#7EB6D9" strokeWidth={2.5} fill="url(#gBienEtre)" />
              <Area type="monotone" dataKey="dialogue" name="Dialogue" stroke="#B8A9D4" strokeWidth={2.5} fill="url(#gDialogue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2 rounded-3xl bg-white/75 backdrop-blur-md border border-white p-4 sm:p-6 shadow-[0_12px_40px_rgba(42,58,74,0.06)] flex flex-col"
      >
        <h3 className="font-[Fraunces] text-xl sm:text-2xl text-[#2A3A4A]">Équilibre duo</h3>
        <p className="text-sm text-[#2A3A4A]/55 mt-1 mb-5">
          Semaine {couple.semaine} · {couple.progressionGlobale}% du parcours
        </p>

        <div className="relative mx-auto mb-6 h-40 w-40 sm:h-44 sm:w-44">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#E6E6FA" strokeWidth="10" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - couple.progressionGlobale / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#98FF98" />
                <stop offset="100%" stopColor="#ADD8E6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
            <span className="font-[Fraunces] text-3xl text-[#2A3A4A]">{couple.progressionGlobale}%</span>
            <span className="text-[10px] uppercase tracking-wider text-[#2A3A4A]/45">global</span>
          </div>
        </div>

        <ul className="space-y-3 mt-auto">
          {radarData.map((item, i) => (
            <li key={item.axe}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-[#2A3A4A]/75">{item.axe}</span>
                <span className="text-[#2A3A4A]/45">{item.valeur}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#2A3A4A]/06 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.valeur}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ background: item.couleur }}
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProgressChart;
