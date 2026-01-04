"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

// Mega menu data structure
const megaMenuData = {
    Products: {
        categories: [
            {
                title: "Fire Rated Doors",
                subcategories: [
                    "Fire-Rated Steel Doors",
                    "Acoustic Door Sets",
                    "Security Doors",
                    "Sliding Door Systems",
                    "Industrial Doors",
                    "Door Hardware",
                ],
            },
            {
                title: "Windows and Glazing Systems",
                subcategories: [
                    "uPVC Windows",
                    "Aluminium Windows",
                    "Structural Glazing",
                    "Curtain Walls",
                    "Glass Partitions",
                    "Skylights",
                ],
            },
            {
                title: "Façade & Architectural Systems",
                subcategories: [
                    "Unitized Façades",
                    "Stick Curtain Walls",
                    "Cladding Systems",
                    "Louvers & Sunshades",
                    "Balustrades",
                    "Canopies",
                ],
            },
            {
                title: "Kitchen & Interior Solutions",
                subcategories: [
                    "Commercial Kitchens",
                    "Stainless Steel Cabinetry",
                    "Modular Workstations",
                    "Hygienic Storage",
                    "Food Processing Units",
                    "Custom Sinks",
                ],
            },
            {
                title: "Industrial & Custom Fabrication",
                subcategories: [
                    "Heavy Fabrication",
                    "OEM Manufacturing",
                    "Sheet Metal Enclosures",
                    "Structural Steel",
                    "Precision Parts",
                    "Automated Welding",
                ],
            },
        ],
        moreAbout: [
            "Product Catalog",
            "Technical Specifications",
            "Case Studies",
            "Installation Guides",
        ],
    },
    Industries: {
        categories: [
            {
                title: "Commercial Buildings",
                subcategories: [
                    "Corporate Offices",
                    "Retail Spaces",
                    "Shopping Malls",
                    "Showrooms",
                ],
            },
            {
                title: "Healthcare",
                subcategories: [
                    "Hospitals & Clinics",
                    "Medical Centers",
                    "Research Facilities",
                    "Laboratories",
                ],
            },
            {
                title: "Industrial",
                subcategories: [
                    "Factories & Plants",
                    "Warehouses",
                    "Clean Rooms",
                    "Production Facilities",
                ],
            },
            {
                title: "Residential",
                subcategories: [
                    "Luxury Residences",
                    "Apartment Complexes",
                    "Gated Communities",
                    "High-Rise Buildings",
                ],
            },
            {
                title: "Infrastructure",
                subcategories: [
                    "Transportation Hubs",
                    "Public Buildings",
                    "Educational Institutions",
                    "Government Facilities",
                ],
            },
        ],
        moreAbout: [
            "Industry Solutions",
            "Project Portfolio",
            "Client Success Stories",
            "Compliance & Certifications",
        ],
    },
    Projects: {
        categories: [
            {
                title: "Featured Projects",
                subcategories: [
                    "Large-Scale Commercial",
                    "Healthcare Installations",
                    "Industrial Complexes",
                    "Residential Developments",
                ],
            },
            {
                title: "Case Studies",
                subcategories: [
                    "Fire Safety Solutions",
                    "Acoustic Performance",
                    "Security Installations",
                    "Custom Fabrication",
                ],
            },
            {
                title: "By Scale",
                subcategories: [
                    "Enterprise Projects",
                    "Mid-Size Installations",
                    "Specialized Solutions",
                    "Turnkey Projects",
                ],
            },
            {
                title: "Client Testimonials",
                subcategories: [
                    "Architects",
                    "Contractors",
                    "Developers",
                    "Facility Managers",
                ],
            },
        ],
        moreAbout: [
            "Project Gallery",
            "Success Stories",
            "Client References",
            "Installation Timeline",
        ],
    },
    Resources: {
        categories: [
            {
                title: "Technical Documents",
                subcategories: [
                    "Product Datasheets",
                    "CAD Drawings",
                    "BIM Models",
                    "Specification Sheets",
                ],
            },
            {
                title: "Certifications",
                subcategories: [
                    "ISO Certifications",
                    "Fire Rating Certificates",
                    "Quality Standards",
                    "Safety Compliance",
                ],
            },
            {
                title: "Installation Guides",
                subcategories: [
                    "Installation Manuals",
                    "Maintenance Guidelines",
                    "Video Tutorials",
                    "Best Practices",
                ],
            },
            {
                title: "Support Materials",
                subcategories: [
                    "FAQs",
                    "Troubleshooting",
                    "Warranty Information",
                    "Product Care",
                ],
            },
        ],
        moreAbout: [
            "Download Center",
            "Technical Library",
            "Training Resources",
            "Documentation Portal",
        ],
    },
    Company: {
        categories: [
            {
                title: "About Us",
                subcategories: [
                    "Company Overview",
                    "Our History",
                    "Leadership Team",
                    "Vision & Mission",
                ],
            },
            {
                title: "Manufacturing",
                subcategories: [
                    "Production Facilities",
                    "Quality Control",
                    "Technology & Innovation",
                    "Capacity & Scale",
                ],
            },
            {
                title: "Certifications & Standards",
                subcategories: [
                    "ISO Certifications",
                    "Industry Accreditations",
                    "Quality Assurance",
                    "Environmental Compliance",
                ],
            },
            {
                title: "Partnerships",
                subcategories: [
                    "Strategic Partners",
                    "Supplier Network",
                    "Distributor Program",
                    "Collaboration Opportunities",
                ],
            },
        ],
        moreAbout: [
            "Careers",
            "News & Updates",
            "Sustainability",
            "Contact Us",
        ],
    },
    Support: {
        categories: [
            {
                title: "Contact",
                subcategories: [
                    "Sales Inquiry",
                    "General Contact",
                    "Regional Offices",
                    "Request a Quote",
                ],
            },
            {
                title: "Technical Support",
                subcategories: [
                    "Product Support",
                    "Installation Assistance",
                    "Technical Consultation",
                    "Engineering Support",
                ],
            },
            {
                title: "Partner Portal",
                subcategories: [
                    "Distributor Login",
                    "Partner Resources",
                    "Order Management",
                    "Training & Certification",
                ],
            },
            {
                title: "After-Sales",
                subcategories: [
                    "Warranty Claims",
                    "Maintenance Services",
                    "Spare Parts",
                    "Service Requests",
                ],
            },
        ],
        moreAbout: [
            "Support Center",
            "Knowledge Base",
            "Contact Directory",
            "Service Locations",
        ],
    },
};

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = React.useState<number | null>(null);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [isContactHovered, setIsContactHovered] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
    const contactTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle click outside and ESC key
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Close search if clicking outside search elements
            if (isSearchOpen && !target.closest('.search-container')) {
                setIsSearchOpen(false);
            }

            if (isSearchOpen && !target.closest('.search-container')) {
                setIsSearchOpen(false);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsSearchOpen(false);
                setIsOpen(false);
            }
        };

        if (isSearchOpen || isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isSearchOpen, isOpen]);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (megaMenuData[label as keyof typeof megaMenuData]) {
            setActiveMegaMenu(label);
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMegaMenu(null);
            setHoveredCategory(null);
            setIsContactHovered(false);
        }, 150);
    };

    const handleContactMouseEnter = () => {
        if (contactTimeoutRef.current) clearTimeout(contactTimeoutRef.current);
        setIsContactHovered(true);
        setActiveMegaMenu(null); // Close mega menu if open
    };

    const handleContactMouseLeave = () => {
        contactTimeoutRef.current = setTimeout(() => {
            setIsContactHovered(false);
        }, 150);
    };

    const navLinks = [
        { href: "#products", label: "Products", hasMegaMenu: true },
        { href: "#industries", label: "Industries", hasMegaMenu: true },
        { href: "#projects", label: "Projects", hasMegaMenu: true },
        { href: "#resources", label: "Resources", hasMegaMenu: true },
        { href: "#company", label: "Company", hasMegaMenu: true },
        { href: "#support", label: "Support", hasMegaMenu: true },
        { href: "/contact-sales", label: "Contact", hasMegaMenu: false, isContact: true },
    ];

    return (
        <>
            {/* Blur Overlay - Desktop Only */}
            <AnimatePresence>
                {activeMegaMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 backdrop-blur-sm bg-black/5 hidden md:block transition-all duration-300"
                        style={{ top: '72px' }}
                    />
                )}
            </AnimatePresence>

            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                )}
                onMouseLeave={handleMouseLeave}
            >
                {/* Navbar Background Layer (Separated to avoid stacking context issues for fixed children) */}
                <div className={cn(
                    "absolute inset-0 bg-background md:bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300",
                    !activeMegaMenu && "border-border"
                )} />

                <div className="relative max-w-[1400px] mx-auto px-4 h-[72px] flex items-center justify-between z-10">
                    {/* Mobile: Hamburger Menu (Left) */}
                    <div className="md:hidden">
                        <button
                            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Logo - Centered on mobile, left on desktop */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center shrink-0 md:mr-auto">
                        <Image
                            src="/images/logo.jpg"
                            alt="Metanoia"
                            width={40}
                            height={40}
                            className="object-contain transition-all duration-300 w-10 h-10"
                            style={{ maxWidth: '40px', maxHeight: '40px', width: '40px', height: '40px' }}
                            priority
                        />
                    </Link>

                    {/* Desktop Links - Centered */}
                    <div className="hidden md:flex h-full items-center justify-center flex-1 gap-12">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => {
                                    if (link.isContact) {
                                        handleContactMouseEnter();
                                    } else {
                                        handleMouseEnter(link.label);
                                        setIsContactHovered(false);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (link.isContact) {
                                        handleContactMouseLeave();
                                    }
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm uppercase tracking-wide font-medium transition-colors duration-200 relative group block",
                                        (link.isContact && isContactHovered) ? "text-accent" : (activeMegaMenu === link.label ? "text-primary" : "text-foreground/80 hover:text-primary")
                                    )}
                                >
                                    <span className="group-hover:text-primary transition-colors duration-200">
                                        {link.label}
                                    </span>
                                    {(activeMegaMenu === link.label || (link.isContact && isContactHovered)) && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                                        />
                                    )}
                                </Link>

                                {link.isContact && (
                                    <AnimatePresence>
                                        {isContactHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 0, x: "-50%" }}
                                                animate={{ opacity: 1, y: 0, x: "-50%" }}
                                                exit={{ opacity: 0, y: -5, x: "-50%" }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute left-1/2 w-64 bg-background border-x border-b border-border shadow-lg rounded-b-sm z-[60]"
                                                style={{ top: '100%' }}
                                                onMouseEnter={handleContactMouseEnter}
                                                onMouseLeave={handleContactMouseLeave}
                                            >
                                                <div className="">
                                                    <Link
                                                        href="https://wa.me/yournumber"
                                                        target="_blank"
                                                        className="flex items-center gap-4 px-5 py-3 hover:bg-secondary transition-colors group w-full"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex flex-col min-w-0">
                                                            <span className="font-semibold text-foreground text-sm">WhatsApp</span>
                                                            <span className="text-xs text-muted-foreground">Chat with us</span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        href="mailto:contact@metanoia.global"
                                                        className="flex items-center gap-4 px-5 py-3 hover:bg-secondary transition-colors group w-full"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                                                            <Mail className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div className="flex flex-col min-w-0">
                                                            <span className="font-semibold text-foreground text-sm">Email Us</span>
                                                            <span className="text-xs text-muted-foreground">Send a message</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Icons - Desktop */}
                    <div className="hidden md:flex items-center gap-6 text-foreground/70">
                        <div className="search-container flex items-center">
                            <button
                                className="p-2 hover:text-accent transition-colors"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                        <Link href="/contact-sales">
                            <Button size="default" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-6 font-medium shadow-none">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Icons - Right (Search) */}
                    <div className="md:hidden flex items-center gap-1 text-foreground/70">
                        <div className="search-container flex items-center">
                            <button
                                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-accent transition-colors"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <AnimatePresence>
                    {
                        isSearchOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative border-t border-border overflow-hidden search-container bg-background z-20"
                            >
                                <div className="max-w-[1400px] mx-auto px-4 py-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search products, industries, resources..."
                                            className="w-full bg-secondary text-foreground px-4 py-3 pr-12 rounded-md border border-input focus:border-primary focus:outline-none transition-colors"
                                            autoFocus
                                        />
                                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>


                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {
                        activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15, delay: 0.15 }} // Delay content until line slides
                                    className="hidden md:block absolute left-0 right-0 top-[60px] bg-background shadow-xl border-b border-border"
                                    onMouseEnter={() => {
                                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="max-w-[1400px] mx-auto px-4 py-8">
                                        <div className="flex gap-8">
                                            {/* Left Column - Explore Categories */}
                                            <div className="w-64">
                                                <div className="text-muted-foreground text-xs uppercase tracking-wider mb-3 font-semibold">
                                                    Explore
                                                </div>
                                                <div className="space-y-1">
                                                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].categories.map((category, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="group"
                                                            onClick={() => setHoveredCategory(hoveredCategory === idx ? null : idx)}
                                                        >
                                                            <div className={cn(
                                                                "flex items-center justify-between py-2 px-3 rounded-md hover:bg-secondary transition-colors cursor-pointer",
                                                                hoveredCategory === idx && "bg-secondary"
                                                            )}>
                                                                <span className={cn(
                                                                    "text-base transition-colors font-medium",
                                                                    hoveredCategory === idx ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                                                )}>
                                                                    {category.title}
                                                                </span>
                                                                <ChevronRight className={cn(
                                                                    "w-4 h-4 text-primary transition-opacity",
                                                                    hoveredCategory === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                                                )} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Center Column - Subcategories (appears on click) */}
                                            <AnimatePresence mode="wait">
                                                {hoveredCategory !== null && (
                                                    <motion.div
                                                        initial={{ opacity: 0, width: 0 }}
                                                        animate={{ opacity: 1, width: "auto" }}
                                                        exit={{ opacity: 0, width: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="flex-1 border-l border-border pl-8 overflow-hidden"
                                                    >
                                                        <div className="text-muted-foreground text-xs uppercase tracking-wider mb-3 font-semibold">
                                                            Explore
                                                        </div>
                                                        <div className="text-accent text-base font-semibold mb-4">
                                                            {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].categories[hoveredCategory].title}
                                                        </div>
                                                        <div className="space-y-2">
                                                            {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].categories[
                                                                hoveredCategory
                                                            ].subcategories.map((sub, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href="#"
                                                                    className="block text-base text-muted-foreground hover:text-primary transition-colors py-1"
                                                                >
                                                                    {sub}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Right Column - More About */}
                                            <div className="w-64 border-l border-border pl-8">
                                                <div className="text-muted-foreground text-xs uppercase tracking-wider mb-3 font-semibold">
                                                    More About
                                                </div>
                                                <div className="space-y-2">
                                                    {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].moreAbout.map(
                                                        (item, idx) => (
                                                            <Link
                                                                key={idx}
                                                                href={item === "Product Catalog" ? "/catalog" : "#"}
                                                                className="block text-base text-muted-foreground hover:text-primary transition-colors py-1"
                                                            >
                                                                {item}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )
                    }
                </AnimatePresence >

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {
                        isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "-100%" }}
                                transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-[72px] left-0 right-0 h-[calc(100dvh-72px)] z-[40] bg-background md:hidden overflow-y-auto border-t border-border"
                            >

                                {/* Mobile Search */}
                                <div className="p-4 border-b border-border">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search products"
                                            className="w-full bg-secondary text-foreground px-4 py-3 pl-10 rounded-md border border-input focus:border-primary focus:outline-none transition-colors"
                                        />
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    </div>
                                </div>

                                {/* Mobile Menu Items */}
                                <div className="p-4">
                                    {navLinks.map((link) => (
                                        <div key={link.label} className="border-b border-border">
                                            {link.hasMegaMenu ? (
                                                <button
                                                    onClick={() => setActiveMegaMenu(activeMegaMenu === link.label ? null : link.label)}
                                                    className="w-full flex items-center justify-between py-4 text-left text-foreground hover:text-primary transition-colors"
                                                >
                                                    <span className="text-base font-medium">{link.label}</span>
                                                    <ChevronRight className={cn(
                                                        "w-5 h-5 transition-transform",
                                                        activeMegaMenu === link.label && "rotate-90"
                                                    )} />
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="w-full flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors"
                                                >
                                                    <span className="text-base font-medium">{link.label}</span>
                                                    {link.isContact ? (
                                                        <div className="flex gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                                                <MessageCircle className="w-4 h-4 text-green-500" />
                                                            </div>
                                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                                                <Mail className="w-4 h-4 text-accent" />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <ChevronRight className="w-5 h-5" />
                                                    )}
                                                </Link>
                                            )}

                                            {/* Expandable Submenu */}
                                            <AnimatePresence>
                                                {link.hasMegaMenu && activeMegaMenu === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden bg-secondary/50 -mx-4 px-4"
                                                    >
                                                        <div className="py-4 space-y-4">
                                                            {megaMenuData[link.label as keyof typeof megaMenuData]?.categories.map((category, idx) => (
                                                                <div key={idx}>
                                                                    <button
                                                                        onClick={() => setHoveredCategory(hoveredCategory === idx ? null : idx)}
                                                                        className="w-full flex items-center justify-between py-2 text-left text-muted-foreground hover:text-foreground transition-colors"
                                                                    >
                                                                        <span className="text-sm font-medium">{category.title}</span>
                                                                        <ChevronRight className={cn(
                                                                            "w-4 h-4 transition-transform",
                                                                            hoveredCategory === idx && "rotate-90"
                                                                        )} />
                                                                    </button>

                                                                    {/* Subcategories */}
                                                                    <AnimatePresence>
                                                                        {hoveredCategory === idx && (
                                                                            <motion.div
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: "auto", opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                transition={{ duration: 0.2 }}
                                                                                className="overflow-hidden pl-4 mt-2 space-y-2"
                                                                            >
                                                                                {category.subcategories.map((sub, subIdx) => (
                                                                                    <Link
                                                                                        key={subIdx}
                                                                                        href="#"
                                                                                        onClick={() => setIsOpen(false)}
                                                                                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                                                    >
                                                                                        {sub}
                                                                                    </Link>
                                                                                ))}
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                </AnimatePresence>
            </nav>
        </>
    );
}
