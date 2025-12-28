"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-muted/30">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* About & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-8">
                            Interested in bulk orders or have a question about our products? We&apos;d love to hear from you.
                        </p>

                        <div className="space-y-6 md:space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email Us</h4>
                                    <p className="text-muted-foreground">inquiry@metanoiakitchen.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Call Us</h4>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Visit Us</h4>
                                    <p className="text-muted-foreground">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border p-6 rounded-2xl">
                            <h3 className="font-bold text-xl mb-2">About Metanoia</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Metanoia Kitchen is committed to redefining culinary tools through precision engineering.
                                Our journey began with a simple mission: to eliminate hygiene risks in the kitchen without sacrificing durability or style.
                                Every board is inspected for perfection before it reaches your countertop.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input type="text" id="name" className="w-full bg-input/50 border border-input rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                                    <input type="text" id="company" className="w-full bg-input/50 border border-input rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Restaurant Inc." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                <input type="email" id="email" className="w-full bg-input/50 border border-input rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium">Inquiry Type</label>
                                <select id="type" className="w-full bg-input/50 border border-input rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                                    <option>General Inquiry</option>
                                    <option>Bulk Order</option>
                                    <option>Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-input/50 border border-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Tell us more completely..." />
                            </div>

                            <Button className="w-full h-12 text-lg">Send Message</Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
