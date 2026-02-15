'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        console.log('Form data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="section-padding bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Let&apos;s Build Something <span className="text-accent">Legendary</span>.</h2>
                            <p className="text-muted text-lg max-w-md">
                                Have a project in mind? Looking for a long-term partner? Or just want to say hi? I&apos;m all ears.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-muted">Email</div>
                                    <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-accent transition-colors">hello@example.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-muted">Phone</div>
                                    <a href="tel:+1234567890" className="text-lg font-medium hover:text-accent transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-muted">Location</div>
                                    <div className="text-lg font-medium">Remote / San Francisco, CA</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 md:p-12 rounded-3xl relative"
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                                >
                                    <div className="h-20 w-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <CheckCircle2 className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                                    <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-muted">Name</label>
                                            <input
                                                {...register('name')}
                                                type="text"
                                                placeholder="John Doe"
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-all",
                                                    errors.name && "border-red-500"
                                                )}
                                            />
                                            {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-muted">Email</label>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                placeholder="john@example.com"
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-all",
                                                    errors.email && "border-red-500"
                                                )}
                                            />
                                            {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted">Subject</label>
                                        <input
                                            {...register('subject')}
                                            type="text"
                                            placeholder="Project Inquiry"
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-all",
                                                errors.subject && "border-red-500"
                                            )}
                                        />
                                        {errors.subject && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.subject.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted">Message</label>
                                        <textarea
                                            {...register('message')}
                                            rows={4}
                                            placeholder="Tell me about your project..."
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-all resize-none",
                                                errors.message && "border-red-500"
                                            )}
                                        />
                                        {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                Send Message <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
