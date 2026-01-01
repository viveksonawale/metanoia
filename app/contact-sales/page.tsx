import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Check, Mail, Phone, Clock } from "lucide-react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Sales | Industrial Solutions",
    description: "Request a quote or technical consultation for your project.",
};

export default function ContactSalesPage() {
    return (
        <main className="min-h-screen bg-background pt-24 md:pt-32 pb-24 md:pb-40">
            <Navbar />

            <Container className="relative z-10 max-w-6xl mb-24 md:mb-40">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
                    {/* Left Column: Context & Trust */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-12">
                        <div>
                            <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase mb-4">
                                Sales & Engineering
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight mb-6">
                                Talk to Our <span className="text-accent italic font-serif normal-case">Sales Team</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Get technical guidance, pricing, and product recommendations for your project. Our engineers are ready to assist with specifications and custom requirements.
                            </p>
                        </div>

                        {/* Trust Signals */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                                Why Partner With Us
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 border border-border">
                                        <Check className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-sm">ISO 9001:2015 Certified Manufacturing</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 border border-border">
                                        <Check className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-sm">High-Performance & Fire-Rated Systems</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 border border-border">
                                        <Check className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-sm">Global Logistics & On-Site Support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Direct Contact Info */}
                        <div className="p-6 rounded-sm border border-border bg-secondary/30">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-4">
                                Direct Contact
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                                    <Phone className="w-4 h-4 group-hover:text-accent transition-colors" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                                    <Mail className="w-4 h-4 group-hover:text-accent transition-colors" />
                                    <span>sales@industrial.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>Mon-Fri: 8am - 6pm EST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-card border border-border rounded-sm p-6 md:p-8 lg:p-10 shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </main >
    );
}
