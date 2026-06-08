'use client';

import { motion } from 'framer-motion';

export function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="max-w-2xl space-y-5"
    >
      <span className="eyebrow">KASIPKER</span>
      <h2 className="text-4xl font-serif leading-[1.05] text-brand-text md:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-brand-muted">{description}</p>
    </motion.div>
  );
}
