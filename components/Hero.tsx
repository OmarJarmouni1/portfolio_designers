'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MousePointer2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20 transition-colors duration-500">

            {/* Subtle Grid Background - Theme Adaptive */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]"
                style={{
                    backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
                    backgroundSize: '48px 48px',
                    color: 'inherit'
                }} />

            {/* Decorative Gradient - Matching Services/Skills accent glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center space-y-10"
                >
                    {/* Integrated Badge Style - Perfectly matching About section */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    {/* Unified Typography Scale - Using text-foreground for absolute black in light mode */}
                    <div className="space-y-6">
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-foreground"
                        >
                            Building Exceptional <br className="hidden md:block" />
                            Digital Experiences.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            A specialized toolkit built for speed, scalability, and exceptional user experiences. Transforming ambitious ideas into market-leading products.
                        </motion.p>
                    </div>

                    {/* Lead Gen / Trust Points - Simplified but Pro */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2"
                    >
                        {["Next.js Expert", "UI/UX Specialist", "7+ Years Exp"].map((text, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Consistent CTA Buttons - Matching site depth and aesthetics */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-black rounded-2xl shadow-xl shadow-zinc-950/10 transition-all text-sm uppercase tracking-widest flex items-center gap-3 group"
                        >
                            View My Work
                            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-950 dark:text-zinc-50 font-black rounded-2xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all text-sm uppercase tracking-widest"
                        >
                            Book a Strategy Call
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Mouse/Scroll Indicator - With "Flash" pulse animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    delay: 1.5,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity cursor-default"
            >
                <div className="w-[1px] h-12 bg-gradient-to-t from-zinc-400 to-transparent" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">Scroll</span>
            </motion.div>

        </section>
    );
}
