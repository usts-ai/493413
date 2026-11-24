import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCards from '../components/StatCards';
import ProgressChart from '../components/ProgressChart';
import Timeline from '../components/Timeline';
import CardGallery from '../components/CardGallery';
import CoupleSpace from '../components/CoupleSpace';
import Reminders from '../components/Reminders';
import { couple } from '../data/mock';

const sectionMotion = {
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -16, filter: 'blur(4px)' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

const Dashboard: React.FC = () => {
  const [section, setSection] = useState('parcours');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F5F5F5] text-[#2A3A4A] font-[Nunito]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#98FF98]/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#ADD8E6]/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-1/4 h-72 w-72 rounded-full bg-[#E6E6FA]/50 blur-3xl"
        />
      </div>

      <Header active={section} onNavigate={setSection} />

      <main className="relative z-10 pt-24 sm:pt-28 pb-8">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] min-h-[340px] sm:min-h-[420px]">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80"
                alt="Famille Naëlya"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A3A4A]/80 via-[#2A3A4A]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3A4A]/50 via-transparent to-[#ADD8E6]/15" />

            <div className="relative h-full min-h-[340px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-10 lg:p-12">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex self-start items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#98FF98] mb-3 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#98FF98] animate-pulse" />
                Application compagnon
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="font-[Fraunces] text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] max-w-xl mb-3"
              >
                Naëlya
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/80 text-sm sm:text-base max-w-md leading-relaxed mb-6"
              >
                Votre tableau de suivi pour cheminer à deux, carte après carte, vers la parentalité.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap items-center gap-3"
              >
                <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/60">Étape actuelle</p>
                  <p className="text-white text-sm font-semibold">{couple.etapeActuelle}</p>
                </div>
                <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/60">Progression</p>
                  <p className="text-white text-sm font-semibold">{couple.progressionGlobale}%</p>
                </div>
                <div className="rounded-2xl bg-[#98FF98]/90 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-[#2A3A4A]/60">Coffret</p>
                  <p className="text-[#2A3A4A] text-sm font-semibold">{couple.codeActivation}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <StatCards />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-none -mx-1 px-1">
            {[
              { id: 'parcours', label: 'Parcours' },
              { id: 'cartes', label: 'Cartes' },
              { id: 'duo', label: 'Espace duo' },
              { id: 'rappels', label: 'Rappels' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSection(tab.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  section === tab.id ? 'text-[#2A3A4A]' : 'text-[#2A3A4A]/55 hover:text-[#2A3A4A]'
                }`}
              >
                {section === tab.id && (
                  <motion.span
                    layoutId="sectionTab"
                    className="absolute inset-0 rounded-full bg-white shadow-md border border-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {section === 'parcours' && (
              <motion.div key="parcours" {...sectionMotion} className="space-y-5">
                <ProgressChart />
                <Timeline />
              </motion.div>
            )}
            {section === 'cartes' && (
              <motion.div key="cartes" {...sectionMotion}>
                <CardGallery />
              </motion.div>
            )}
            {section === 'duo' && (
              <motion.div key="duo" {...sectionMotion}>
                <CoupleSpace />
              </motion.div>
            )}
            {section === 'rappels' && (
              <motion.div key="rappels" {...sectionMotion}>
                <Reminders />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
