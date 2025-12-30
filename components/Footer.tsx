"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail } from "lucide-react";
import { categoryData } from "@/lib/categoryData";

export function Footer() {
    return (
        <footer className="bg-black text-white border-t border-[#222] pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/images/logo-shield.png"
                                    alt="Metanoia"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter uppercase">Metanoia</span>
                        </Link>
                        <p className="text-[#999] text-sm leading-relaxed max-w-xs">
                            Premium architectural and industrial solutions for enterprise construction projects. Engineered for durability, designed for performance.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 rounded border border-[#333] flex items-center justify-center text-[#999] hover:text-white hover:border-[#44d62c] transition-all bg-[#111]">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded border border-[#333] flex items-center justify-center text-[#999] hover:text-white hover:border-[#44d62c] transition-all bg-[#111]">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded border border-[#333] flex items-center justify-center text-[#999] hover:text-white hover:border-[#44d62c] transition-all bg-[#111]">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded border border-[#333] flex items-center justify-center text-[#999] hover:text-white hover:border-[#44d62c] transition-all bg-[#111]">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
                        <div className="flex flex-col space-y-3">
                            {["About Us", "Our Projects", "Sustainability", "Careers", "News & Media", "Contact"].map((item) => (
                                <Link key={item} href="#" className="text-[#999] hover:text-[#44d62c] text-sm transition-colors">
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
                                    className="text-[#999] hover:text-[#44d62c] text-sm transition-colors"
                                >
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Stay Updated */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-[#999] text-sm">
                            Subscribe for latest product specifications and engineering updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-1 bg-[#111] border border-[#333] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#44d62c] transition-colors rounded-sm"
                            />
                            <button className="bg-[#44d62c] text-black font-bold uppercase px-6 py-3 text-sm hover:bg-[#3cc026] transition-colors rounded-sm">
                                Join
                            </button>
                        </div>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3 text-[#999]">
                                <MapPin className="w-5 h-5 text-[#44d62c] shrink-0" />
                                <span className="text-sm">
                                    1200 Industrial Parkway, Suite 500<br />
                                    Houston, TX 77002, USA
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-[#999]">
                                <Mail className="w-5 h-5 text-[#44d62c] shrink-0" />
                                <span className="text-sm">engineering@metanoia.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[#666] text-xs">
                        &copy; {new Date().getFullYear()} Metanoia Industries. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-[#666] text-xs font-bold tracking-wider uppercase">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Services</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
