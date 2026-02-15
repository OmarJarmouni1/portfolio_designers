'use client';

import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-sm text-muted">
                    © {new Date().getFullYear()} Freelance Portfolio. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
