'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Layout,
    Database,
    Settings,
    Code2,
    Zap,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
    {
        id: '01',
        title: 'Frontend Architecture',
        description: 'Building resilient, scalable, and high-performance user interfaces with modern frontend patterns and modular system design.',
        icon: Layout,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer'],
        tag: 'UI Engineering'
    },
    {
        id: '02',
        title: 'Backend Systems',
        description: 'Scaling data layers and API protocols with high availability and security.',
        icon: Database,
        skills: ['Node.js', 'PostgreSQL', 'Laravel', 'GraphQL'],
        tag: 'Scalability'
    },
    {
        id: '03',
        title: 'Data Analytics',
        description: 'Transforming complex datasets into actionable business intelligence and models.',
        icon: Database,
        skills: ['Python', 'SQL', 'Pandas', 'Matplotlib', 'Tableau'],
        tag: 'Big Data'
    },
    {
        id: '04',
        title: 'DevOps & Cloud',
        description: 'Automating deployment pipelines and infrastructure as code.',
        icon: Settings,
        skills: ['Git', 'Docker', 'AWS', 'Vercel'],
        tag: 'Infrastructure'
    },
    {
        id: '05',
        title: 'Code Quality',
        description: 'Maintaining excellence through testing and clean architecture patterns.',
        icon: Code2,
        skills: ['Jest', 'TDD', 'Patterns'],
        tag: 'Reliability'
    },
];

export function Skills() {
    return (
        <section id="skills" className="section-padding bg-zinc-50/30 dark:bg-zinc-900/10 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest"
                    >
                        <Zap size={12} /> Capabilities
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                        Technical <span className="text-accent underline decoration-accent/20 underline-offset-8">Ecosystem.</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                        A focused toolkit engineered for scalability and high-fidelity user experiences.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-zinc-200 dark:border-white/5"
                >
                    {skillCategories.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        duration: 0.8
                                    }
                                }
                            }}
                            className={cn(
                                "group relative p-12 overflow-hidden transition-all duration-500",
                                "bg-transparent border-zinc-200 dark:border-white/5",
                                "hover:bg-white dark:hover:bg-white/10",
                                "border-b md:border-r",
                                (idx + 1) % 2 === 0 && "md:border-r-0 lg:border-r",
                                (idx + 1) % 3 === 0 && "lg:border-r-0"
                            )}
                        >
                            <div className="relative z-10 space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className={cn(
                                        "p-4 rounded-2xl transition-all duration-500",
                                        "bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white",
                                        "group-hover:bg-accent group-hover:text-white group-hover:rotate-12"
                                    )}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-4xl font-black text-zinc-100 dark:text-white/5 group-hover:text-accent/20 transition-colors duration-500">
                                        {item.id}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:translate-x-2 transition-all duration-500 flex items-center gap-2">
                                        {item.title}
                                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-500 border",
                                                "bg-transparent text-zinc-400 border-zinc-200 dark:border-white/5",
                                                "group-hover:text-zinc-900 dark:group-hover:text-zinc-200 group-hover:border-zinc-300 dark:group-hover:border-white/20"
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
