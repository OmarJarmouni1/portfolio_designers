'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Layout,
    Database,
    Settings,
    Code2,
    Smartphone,
    Globe,
    Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
    {
        title: 'Frontend Architecture',
        description: 'Specializing in high-performance, modular UIs with modern frameworks.',
        icon: Layout,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        className: 'md:col-span-2 md:row-span-2 bg-zinc-900 text-white',
        iconColor: 'text-blue-400'
    },
    {
        title: 'Backend Systems',
        description: 'Scaling data layers and API protocols.',
        icon: Database,
        skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GraphQL'],
        className: 'md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-border',
        iconColor: 'text-emerald-500'
    },
    {
        title: 'Mobile & App',
        description: 'Cross-platform native experiences.',
        icon: Smartphone,
        skills: ['React Native', 'Expo', 'Mobile UX'],
        className: 'md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-border',
        iconColor: 'text-purple-500'
    },
    {
        title: 'DevOps & Tooling',
        description: 'Automating deployment and infrastructure for seamless delivery.',
        icon: Settings,
        skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
        className: 'md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-border',
        iconColor: 'text-orange-500'
    },
    {
        title: 'Code Quality',
        description: 'Testing and clean architecture.',
        icon: Code2,
        skills: ['Jest', 'TDD', 'Design Patterns'],
        className: 'md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-border',
        iconColor: 'text-rose-500'
    }
];

export function Skills() {
    return (
        <section id="skills" className="section-padding bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 space-y-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        Capabilities
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                        My Technical <span className="text-accent">Ecosystem.</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                        A specialized toolkit built for speed, scalability, and exceptional user experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                    {skillCategories.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 0.99 }}
                            className={cn(
                                "group relative p-8 rounded-[2.5rem] overflow-hidden flex flex-col justify-between transition-all duration-500",
                                item.className
                            )}
                        >
                            {/* Mesh Background for Dark Cards */}
                            {item.className.includes('bg-zinc-900') && (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)]" />
                            )}

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="space-y-4">
                                    <div className={cn("p-3 rounded-2xl bg-white/5 w-fit border border-white/10 shadow-sm", item.iconColor)}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-2">{item.title}</h3>
                                        <p className={cn(
                                            "text-sm font-medium leading-relaxed opacity-70",
                                            item.className.includes('bg-zinc-900') ? "text-zinc-400" : "text-zinc-500"
                                        )}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                item.className.includes('bg-zinc-900')
                                                    ? "bg-white/10 text-white/80 border border-white/5"
                                                    : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Circle for light cards */}
                            {!item.className.includes('bg-zinc-900') && (
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
