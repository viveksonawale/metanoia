"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { categoryData } from "@/lib/categoryData";

export function Footer() {
    return (
        <footer className="bg-muted/30 text-foreground border-t border-border pt-12 pb-6">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Metanoia"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter uppercase">Metanoia</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Premium architectural and industrial solutions for enterprise construction projects. Engineered for durability, designed for performance.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/metanoiaglobal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-input flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all bg-background">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-sm border border-input flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all bg-background">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-sm border border-input flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all bg-background">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
                        <div className="flex flex-col space-y-3">
                            {["About Us", "Our Projects", "Sustainability", "Careers", "News & Media", "Contact"].map((item) => (
                                <Link key={item} href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider">Products</h3>
                        <div className="flex flex-col space-y-3">
                            {categoryData.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/catalog/${category.slug}`}
                                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-muted-foreground text-sm">
                            Subscribe for latest product specifications and engineering updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-1 bg-background border border-input px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-md"
                            />
                            <button className="bg-accent text-accent-foreground font-bold uppercase px-6 py-3 text-sm hover:bg-accent/90 transition-colors rounded-sm">
                                Join
                            </button>
                        </div>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3 text-muted-foreground group">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=301+Bldg+No.+5+HastinapuR+Lok+Nagri+Complex+Ambernath+Thane+Kalyan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm group-hover:text-foreground transition-colors"
                                >
                                    301 Bldg No. 5, HastinapuR, Lok Nagri Complex,
                                    Ambernath, Thane, Kalyan,
                                    Maharashtra, India, 421501
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground group">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:support@metanoiaglobal.com" className="text-sm group-hover:text-foreground transition-colors">support@metanoiaglobal.com</a>
                            </div>
                            <div className="flex items-start gap-3 text-muted-foreground group">
                                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <div className="flex flex-col text-sm">
                                    <a href="tel:+918169025019" className="hover:text-foreground transition-colors">+91 816 902 5019</a>
                                    <a href="tel:+917972891950" className="hover:text-foreground transition-colors">+91 79 7289 1950</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-muted-foreground text-xs">
                        &copy; {new Date().getFullYear()} Metanoia Industries. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-muted-foreground text-xs font-bold tracking-wider uppercase">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Services</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
