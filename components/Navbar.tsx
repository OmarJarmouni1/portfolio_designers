'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const navLinks = [
    { name: 'Portfolio', href: '#projects' },
    { name: 'Expertise', href: '#services' },
    { name: 'About', href: '#about' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoSrc = resolvedTheme === 'dark' || (resolvedTheme === 'light' && scrolled) ? '/img/darck.png' : '/img/light.png';

    return (
        <header
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-700 flex justify-center pt-2 px-6 pointer-events-none'
            )}
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    'max-w-7xl w-full h-20 flex justify-between items-center px-6 lg:px-10 rounded-2xl transition-all duration-700 pointer-events-auto',
                    scrolled
                        ? 'bg-zinc-900 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.15)]'
                        : 'bg-transparent border border-transparent'
                )}
            >
                {/* Branding with Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-48 w-56 transition-transform group-hover:scale-105 right-15">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            )}
                        </div>
                    </Link>
                </div>


                {/* Desktop Nav - Professional Centered */}
                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-xl transition-all relative group",
                                scrolled
                                    ? "text-zinc-300 hover:text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute bottom-1 left-5 right-5 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
                                scrolled ? "bg-white" : "bg-zinc-900 dark:bg-zinc-50"
                            )} />
                        </Link>
                    ))}
                    <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-4" />
                    <a
                        href="/cv/Document 3.pdf"
                        download="Omar_Jarmouni_CV.pdf"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors mr-2 relative z-50 pointer-events-auto text-zinc-700 dark:text-zinc-300"
                        aria-label="Download CV"
                        title="Download CV"
                    >
                        <Download className="h-[18px] w-[18px]" />
                    </a>
                    <ThemeToggle />
                </nav>

                {/* Lead Gen CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className={cn(
                            "hidden md:flex px-6 py-3 text-[12px] font-black uppercase tracking-widest rounded-xl transition-all shadow-xl active:scale-95 group items-center gap-2",
                            scrolled
                                ? "bg-white text-zinc-900 hover:bg-zinc-100 hover:translate-y-[-2px]"
                                : "bg-zinc-900/10 dark:bg-zinc-50 backdrop-blur-sm border border-zinc-900/5 text-zinc-900 dark:text-zinc-900 hover:bg-zinc-900 hover:text-white"
                        )}
                    >
                        Start a Project
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-3 text-zinc-900 dark:text-zinc-50 md:hidden bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-zinc-700"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-6 right-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-700 p-8 md:hidden shadow-2xl z-40 pointer-events-auto"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/cv/Document 3.pdf"
                                download="Omar_Jarmouni_CV.pdf"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-6 py-5 bg-transparent border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 text-center font-black rounded-2xl flex items-center justify-center gap-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            >
                                <Download className="w-5 h-5" /> Download CV
                            </a>
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-6 py-5 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-center font-black rounded-2xl flex items-center justify-center gap-2"
                            >
                                Start a Project <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
