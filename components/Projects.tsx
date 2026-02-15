'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with real-time inventory and stripe integration.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
        link: '#',
        github: '#',
        image: 'bg-zinc-100 dark:bg-zinc-900',
    },
    {
        title: 'AI Content Generator',
        description: 'Leveraging OpenAI API to generate high-quality marketing copy and blog posts.',
        tech: ['React', 'Node.js', 'OpenAI', 'Tailwind'],
        link: '#',
        github: '#',
        image: 'bg-zinc-100 dark:bg-zinc-900',
    },
    {
        title: 'Task Management Suite',
        description: 'A collaborative tool for teams to manage projects with kanban boards.',
        tech: ['React', 'Firebase', 'Dnd Kit', 'Context API'],
        link: '#',
        github: '#',
        image: 'bg-zinc-100 dark:bg-zinc-900',
    },
];

export function Projects() {
    return (
        <section id="projects" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Selected Projects</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl">
                            A collection of digital products focused on performance, accessibility, and user experience.
                        </p>
                    </div>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                        View GitHub <ExternalLink className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <div className={cn(
                                "aspect-[16/10] rounded-2xl mb-6 overflow-hidden border border-border relative",
                                project.image
                            )}>
                                <div className="absolute inset-0 flex items-center justify-center text-muted/30 group-hover:scale-110 transition-transform duration-500">
                                    <Code2 className="h-16 w-16" />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg">
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href={project.link} className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg">
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-accent/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
