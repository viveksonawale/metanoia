import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Check, Mail, Phone, Clock, MapPin, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Sales | Industrial Solutions",
    description: "Request a quote or technical consultation for your project.",
};

export default function ContactSalesPage() {
    return (
        <main className="min-h-screen bg-background pt-24 md:pt-32">
            <Navbar />

            <Container className="relative z-10 max-w-[1400px] mb-12 md:mb-20">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
                    {/* Left Column: Context & Trust */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight mb-6">
                                Contact <span className="text-accent italic font-serif normal-case">Us</span>
                            </h1>
                        </div>


                        {/* Direct Contact Info */}
                        <div className="p-6 rounded-sm border border-border bg-secondary/30">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-6 text-sm">
                                {/* Address */}
                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <span className="font-semibold text-foreground">Headquarters</span>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=301+Bldg+No.+5+HastinapuR+Lok+Nagri+Complex+Ambernath+Thane+Kalyan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block leading-relaxed hover:text-accent transition-colors"
                                        >
                                            301 Bldg No. 5, HastinapuR, Lok Nagri Complex,
                                            <br />
                                            Ambernath, Thane, Kalyan,
                                            <br />
                                            Maharashtra, India, 421501
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <a href="mailto:support@metanoiaglobal.com" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                                    <Mail className="w-5 h-5 text-accent shrink-0" />
                                    <span>support@metanoiaglobal.com</span>
                                </a>

                                {/* Phone Numbers */}
                                <div className="flex items-start gap-4 text-muted-foreground group">
                                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+918169025019" className="hover:text-accent transition-colors cursor-pointer">+91 816 902 5019</a>
                                        <a href="tel:+917972891950" className="hover:text-accent transition-colors cursor-pointer">+91 79 7289 1950</a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <Clock className="w-5 h-5 text-accent shrink-0" />
                                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                                </div>

                                {/* Social Media */}
                                {/* Social Media & WeChat */}
                                <div className="pt-6 border-t border-border/50 flex flex-col gap-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Socials</h4>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2">
                                            <a href="https://www.linkedin.com/company/metanoiaglobal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                                                <Facebook className="w-5 h-5" />
                                            </a>
                                        </div>

                                        <a
                                            href="https://wa.me/918169025019"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b857] text-white h-10 px-4 rounded-sm font-medium text-sm transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            Chat on WhatsApp
                                        </a>
                                    </div>
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
