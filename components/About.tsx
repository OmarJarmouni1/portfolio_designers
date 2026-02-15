'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    { label: 'Platform Expertise', value: '5+', sub: 'Years', icon: Briefcase },
    { label: 'Successful Launches', value: '40+', sub: 'Projects', icon: Award },
    { label: 'Client Feedback', value: '100%', sub: 'Positive', icon: User },
];

export function About() {
    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute top-20 -left-20 text-[20rem] font-black text-zinc-50 dark:text-zinc-900/10 select-none pointer-events-none tracking-tighter opacity-50">
                ABOUT
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Visual Side */}
                    <div className="lg:col-span-5 relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-border group"
                        >
                            {/* Main Placeholder/Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-800">
                                <User className="h-64 w-64 opacity-20 transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>

                        {/* Floating Stats Cards */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 space-y-4 hidden md:block">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                                    className="glass p-6 rounded-3xl border-border shadow-2xl min-w-[180px] hover:translate-x-[-10px] transition-transform duration-500"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                            <stat.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black tracking-tight">{stat.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-7 space-y-10 order-1 lg:order-2 lg:pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                The Story
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                                Architecting <span className="text-accent italic">Exceptional</span> Digital Spaces.
                            </h2>

                            <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                                <p>
                                    I don&apos;t just write code; I design ecosystems. My journey is defined by a relentless pursuit of
                                    minimalism, where every pixel serves a purpose and every interaction feels intuitive.
                                </p>
                                <p>
                                    Based at the intersection of aesthetic brilliance and technical precision, I help brands
                                    transform complex requirements into seamless, high-performance web applications that
                                    leave a lasting impression.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold transition-all shadow-xl hover:shadow-accent/20"
                            >
                                Learn More About Me <ArrowRight className="h-5 w-5" />
                            </motion.button>
                        </motion.div>

                        {/* Mobile Stats (Stacked) */}
                        <div className="grid grid-cols-2 gap-4 md:hidden">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-border">
                                    <div className="text-2xl font-black tracking-tight">{stat.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
