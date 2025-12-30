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
        <main className="min-h-screen bg-background pt-24 md:pt-32 pb-12 md:pb-20">
            <Navbar />
            {/* Background Texture */}
            <div className="fixed inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <Container className="relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
                    {/* Left Column: Context & Trust */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/30 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 bg-primary/5">
                                Sales & Engineering
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4 md:mb-6">
                                Talk to Our Sales Team
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
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">ISO 9001:2015 Certified Manufacturing</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">High-Performance & Fire-Rated Systems</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm">Global Logistics & On-Site Support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Direct Contact Info */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-4">
                                Direct Contact
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                    <Phone className="w-4 h-4" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                    <Mail className="w-4 h-4" />
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
                        <div className="bg-card/30 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </main >
    );
}
