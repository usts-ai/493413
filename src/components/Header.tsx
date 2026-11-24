import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/mock';

type HeaderProps = {
  active: string;
  onNavigate: (id: string) => void;
};

const Header: React.FC<HeaderProps> = ({ active, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F5F5F5]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(42,58,74,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go('parcours')}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#98FF98] via-[#ADD8E6] to-[#E6E6FA] shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="font-[Fraunces] text-lg text-[#2A3A4A] font-semibold">N</span>
          </span>
          <span className="font-[Fraunces] text-xl sm:text-2xl tracking-tight text-[#2A3A4A]">
            Naëlya
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/80 shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="relative px-4 py-2 text-sm font-medium text-[#2A3A4A]/80 hover:text-[#2A3A4A] transition-colors"
            >
              {active === item.id && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#98FF98]/70 to-[#ADD8E6]/70"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#2A3A4A] text-white text-sm px-4 py-2.5 shadow-lg shadow-[#2A3A4A]/20"
          >
            <span className="h-2 w-2 rounded-full bg-[#98FF98] animate-pulse" />
            Coffret lié
          </motion.button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-1.5 h-10 w-10 rounded-xl bg-white/70 border border-white"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 mx-auto bg-[#2A3A4A] origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 mx-auto bg-[#2A3A4A]"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 mx-auto bg-[#2A3A4A] origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#F5F5F5]/95 backdrop-blur-xl border-t border-white/60"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(item.id)}
                  className={`text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    active === item.id
                      ? 'bg-gradient-to-r from-[#98FF98]/50 to-[#ADD8E6]/50 text-[#2A3A4A]'
                      : 'text-[#2A3A4A]/80 hover:bg-white/70'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
