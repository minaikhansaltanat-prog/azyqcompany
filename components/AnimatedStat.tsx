'use client';

import { motion } from 'framer-motion';

export function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="bezel-outer"
    >
      <div className="bezel-inner p-6 text-center">
        <p className="text-4xl font-serif leading-none text-brand-gold" style={{ textShadow: '0 0 30px rgba(196,154,60,0.35)' }}>
          {value}
        </p>
        <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted">{label}</p>
      </div>
    </motion.div>
  );
}
