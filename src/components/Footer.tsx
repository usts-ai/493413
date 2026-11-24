import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Confidentialité', href: '#' },
  { label: 'Mentions légales', href: '#' },
  { label: 'RGPD', href: '#' },
  { label: 'Contact', href: '#' },
];

const socials = [
  { label: 'Instagram', path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z' },
  { label: 'Pinterest', path: 'M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.2 9.2-.1-.8-.2-2 0-2.9.2-.8 1.3-5.5 1.3-5.5s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.8-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2-1.3 2.7 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z' },
  { label: 'YouTube', path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 sm:mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A3A4A] via-[#3D5166] to-[#2A3A4A]" />
      <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#98FF98]/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#ADD8E6]/25 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Fraunces] text-3xl text-white mb-3"
            >
              Naëlya
            </motion.p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              L’accompagnement doux des couples qui deviennent parents — coffret & application compagnon.
            </p>
          </div>

          <div>
            <p className="text-white/90 text-sm font-semibold mb-4 tracking-wide uppercase">Informations</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/65 text-sm hover:text-[#98FF98] transition-colors duration-300"
                  >
                    <span className="h-px w-0 bg-[#98FF98] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/90 text-sm font-semibold mb-4 tracking-wide uppercase">Nous suivre</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-11 w-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#98FF98]/30 hover:border-[#98FF98]/50 transition-colors duration-300"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-white/45 text-xs leading-relaxed">
              Données hébergées en Europe · Chiffrement HTTPS · Conformité RGPD
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2026 Naëlya — Tous droits réservés</p>
          <p className="text-white/40 text-xs">Fait avec douceur pour les futurs parents</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
