'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, PenTool, Type } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        id: '01',
        title: 'UI Design',
        description: 'We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.',
        icon: Layout,
    },
    {
        id: '02',
        title: 'Development',
        description: 'Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.',
        icon: Code2,
    },
    {
        id: '03',
        title: 'Graphic Design',
        description: 'We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand\'s identity.',
        icon: PenTool,
    },
    {
        id: '04',
        title: 'Branding',
        description: 'We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.',
        icon: Type,
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col xl:flex-row gap-16 xl:gap-8">
                {/* Left side: Heading */}
                <div className="xl:w-1/3 flex flex-col justify-start pt-4">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 dark:text-white xl:sticky xl:top-32">
                        How Can I<br />
                        Assist You?
                    </h2>
                </div>

                {/* Right side: Grid */}
                <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-zinc-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-sm border border-zinc-200/50 dark:border-white/5 min-h-[300px]"
                        >
                            <div className="flex flex-col md:flex-row gap-6 mb-12">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 flex items-center justify-center shrink-0">
                                    <item.icon size={22} strokeWidth={2.5} />
                                </div>
                                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-end mt-auto">
                                <h3 className="text-[22px] font-semibold text-zinc-900 dark:text-white tracking-tight">
                                    {item.title}
                                </h3>
                                <span className="text-[22px] font-medium text-zinc-400 dark:text-zinc-500">
                                    {item.id}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
