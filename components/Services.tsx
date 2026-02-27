'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Server, Smartphone, Layout, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        id: '01',
        title: 'Web Engineering',
        description: 'Architecting ultra-fast, search-optimized web experiences using the latest Next.js paradigms.',
        icon: Globe,
        tag: 'Scalability'
    },
    {
        id: '02',
        title: 'Cloud Architectures',
        description: 'Deployment strategies and serverless infrastructures that scale automatically with your traffic.',
        icon: Server,
        tag: 'Infrastructure'
    },
    {
        id: '03',
        title: 'App Ecosystems',
        description: 'Unified cross-platform development that ensures your product reaches users on every device.',
        icon: Smartphone,
        tag: 'Integration'
    },
    {
        id: '04',
        title: 'Data Analytics & Insights',
        description: 'Turning raw data into strategic assets through advanced statistical modeling and visualization.',
        icon: BarChart3,
        tag: 'Insights'
    },
    {
        id: '05',
        title: 'Perf Optimization',
        description: 'Deep audits targeting Core Web Vitals to ensure sub-second interaction times.',
        icon: Zap,
        tag: 'Performance'
    },
    {
        id: '06',
        title: 'Secured Delivery',
        description: 'Implementing enterprise-grade security protocols and automated testing suites.',
        icon: ShieldCheck,
        tag: 'Security'
    }
];

export function Services() {
    return (
        <section id="services" className="section-padding bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold uppercase tracking-[0.3em] inline-block"
                        >
                            Services
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
                            Solving Digital <span className="text-zinc-400">Puzzles.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium max-w-sm mb-2 leading-relaxed">
                        Providing high-end technical expertise to transform ambitious ideas into market-leading products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={cn(
                                "group relative p-12 overflow-hidden border-border transition-all duration-500 hover:bg-white dark:hover:bg-white/5",
                                "border-b md:border-r",
                                idx % 3 === 2 && "md:border-r-0",
                                idx >= 3 && "border-b-0"
                            )}
                        >
                            <div className="relative z-10 space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-4xl font-black text-zinc-100 dark:text-white/5 group-hover:text-accent/20 transition-colors duration-500">
                                        {service.id}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {service.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-2">
                                        {service.title}
                                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
