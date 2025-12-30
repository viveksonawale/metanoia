"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mega menu data structure
const megaMenuData = {
    Products: {
        categories: [
            {
                title: "Doors & Door Systems",
                subcategories: [
                    "Fire-Rated Steel Doors",
                    "Metal Doors",
                    "Emergency Exit Doors",
                    "Acoustic Doors",
                    "Security / Bullet-Resistant Doors",
                    "Door Frames & Accessories",
                    "Hinges, Locks & Hardware",
                ],
            },
            {
                title: "Windows & Glazing Systems",
                subcategories: [
                    "uPVC Window Systems",
                    "Aluminium Window Systems",
                    "Sliding Windows",
                    "Casement Windows",
                    "Fixed / Picture Windows",
                    "Glass & Glazing Solutions",
                ],
            },
            {
                title: "Façade & Architectural Systems",
                subcategories: [
                    "Curtain Wall Systems",
                    "Structural Glazing",
                    "Louvers & Sunshades",
                    "Cladding Systems",
                    "Railing & Balustrades",
                ],
            },
            {
                title: "Kitchen & Interior Solutions",
                subcategories: [
                    "Modular Kitchen Systems",
                    "Stainless Steel Kitchen Units",
                    "Storage & Shelving Systems",
                    "Custom Fabricated Components",
                ],
            },
            {
                title: "Industrial & Custom Fabrication",
                subcategories: [
                    "Custom Metal Fabrication",
                    "OEM / Project-Based Manufacturing",
                    "Industrial Enclosures",
                    "Special-Purpose Components",
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
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        }, 150);
    };

    const navLinks = [
        { href: "#products", label: "Products", hasMegaMenu: true },
        { href: "#industries", label: "Industries", hasMegaMenu: true },
        { href: "#projects", label: "Projects", hasMegaMenu: true },
        { href: "#resources", label: "Resources", hasMegaMenu: true },
        { href: "#company", label: "Company", hasMegaMenu: true },
        { href: "#support", label: "Support", hasMegaMenu: true },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black text-[#888]",
                !activeMegaMenu && "border-b border-[#44d62c]" // Only show border when mega menu is closed
            )}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-[1400px] mx-auto px-4 h-[60px] flex items-center justify-between">
                {/* Mobile: Hamburger Menu (Left) */}
                <div className="md:hidden">
                    <button
                        className="p-2 text-[#999] hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Logo - Centered on mobile, left on desktop */}
                <Link href="/" className="flex items-center justify-center w-12 h-12 shrink-0 md:mr-auto">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/images/logo-shield.png"
                            alt="Metanoia"
                            fill
                            className="object-contain hover:brightness-125 transition-all duration-300"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links - Centered */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-12">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(link.label)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm uppercase tracking-wider font-bold transition-colors duration-200 relative group py-5 block",
                                    activeMegaMenu === link.label ? "text-white" : "text-[#999]"
                                )}
                            >
                                <span className="group-hover:text-white transition-colors duration-200">
                                    {link.label}
                                </span>
                                {activeMegaMenu === link.label && (
                                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#44d62c] shadow-[0_0_8px_rgba(68,214,44,0.5)]" />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Right Icons - Desktop */}
                <div className="hidden md:flex items-center gap-6 text-[#999]">
                    <button
                        className="hover:text-white transition-colors"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        className="hover:text-white transition-colors relative"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Icons - Right (Search & Cart) */}
                <div className="md:hidden flex items-center gap-4 text-[#999]">
                    <button
                        className="hover:text-white transition-colors"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        className="hover:text-white transition-colors relative"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
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
                            className="border-t border-[#222] overflow-hidden"
                        >
                            <div className="max-w-[1400px] mx-auto px-4 py-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products, industries, resources..."
                                        className="w-full bg-[#111] text-white px-4 py-3 pr-12 rounded border border-[#333] focus:border-[#44d62c] focus:outline-none transition-colors"
                                        autoFocus
                                    />
                                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#44d62c]" />
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            {/* Cart Dropdown */}
            <AnimatePresence>
                {isCartOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-4 top-[70px] w-80 bg-[#1a1a1a] border border-[#333] rounded-lg shadow-2xl z-50"
                    >
                        {/* Empty Cart Message */}
                        <div className="p-6 border-b border-[#333]">
                            <p className="text-[#999] text-center text-sm">Your Cart is empty.</p>
                        </div>

                        {/* Cart Menu Items */}
                        <div className="p-4">
                            <Link
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#222] rounded transition-colors"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <ShoppingCart className="w-5 h-5 text-[#44d62c]" />
                                <span className="text-sm font-medium">Cart</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#222] rounded transition-colors"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span className="text-sm font-medium">Orders</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#222] rounded transition-colors"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-sm font-medium">Account</span>
                            </Link>
                            <div className="border-t border-[#333] my-2"></div>
                            <Link
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#222] rounded transition-colors"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span className="text-sm font-medium">Log In</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
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
                                className="absolute left-0 right-0 top-[62px] bg-black shadow-2xl"
                                onMouseEnter={() => {
                                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Animated Green Border - slides to bottom */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "100%" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-0 right-0 bottom-0 pointer-events-none"
                                    style={{ transformOrigin: "bottom" }}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-[#44d62c] shadow-[0_0_8px_#44d62c]" />
                                </motion.div>
                                <div className="max-w-[1400px] mx-auto px-4 py-8">
                                    <div className="flex gap-8">
                                        {/* Left Column - Explore Categories */}
                                        <div className="w-64">
                                            <div className="text-[#666] text-xs uppercase tracking-wider mb-3 font-semibold">
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
                                                            "flex items-center justify-between py-2 px-3 rounded hover:bg-[#111] transition-colors cursor-pointer",
                                                            hoveredCategory === idx && "bg-[#111]"
                                                        )}>
                                                            <span className={cn(
                                                                "text-base transition-colors font-medium",
                                                                hoveredCategory === idx ? "text-white" : "text-[#999] group-hover:text-white"
                                                            )}>
                                                                {category.title}
                                                            </span>
                                                            <ChevronRight className={cn(
                                                                "w-4 h-4 text-[#44d62c] transition-opacity",
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
                                                    className="flex-1 border-l border-[#222] pl-8 overflow-hidden"
                                                >
                                                    <div className="text-[#666] text-xs uppercase tracking-wider mb-3 font-semibold">
                                                        Explore
                                                    </div>
                                                    <div className="text-[#44d62c] text-base font-semibold mb-4">
                                                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].categories[hoveredCategory].title}
                                                    </div>
                                                    <div className="space-y-2">
                                                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].categories[
                                                            hoveredCategory
                                                        ].subcategories.map((sub, idx) => (
                                                            <Link
                                                                key={idx}
                                                                href="#"
                                                                className="block text-base text-[#999] hover:text-white transition-colors py-1"
                                                            >
                                                                {sub}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Right Column - More About */}
                                        <div className="w-64 border-l border-[#222] pl-8">
                                            <div className="text-[#666] text-xs uppercase tracking-wider mb-3 font-semibold">
                                                More About
                                            </div>
                                            <div className="space-y-2">
                                                {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].moreAbout.map(
                                                    (item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href="#"
                                                            className="block text-base text-[#999] hover:text-[#44d62c] transition-colors py-1"
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
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-black fixed inset-0 top-0 z-50 overflow-auto"
                        >
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-4 border-b border-[#222]">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white hover:text-[#44d62c] transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src="/images/logo-shield.png"
                                            alt="Metanoia"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>
                                <div className="w-10" /> {/* Spacer for centering */}
                            </div>

                            {/* Mobile Search */}
                            <div className="p-4 border-b border-[#222]">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products"
                                        className="w-full bg-[#1a1a1a] text-white px-4 py-3 pl-10 rounded border border-[#333] focus:border-[#44d62c] focus:outline-none transition-colors"
                                    />
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                                </div>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="p-4">
                                {navLinks.map((link) => (
                                    <div key={link.label} className="border-b border-[#222]">
                                        {link.hasMegaMenu ? (
                                            <button
                                                onClick={() => setActiveMegaMenu(activeMegaMenu === link.label ? null : link.label)}
                                                className="w-full flex items-center justify-between py-4 text-left text-white hover:text-[#44d62c] transition-colors"
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
                                                className="w-full flex items-center justify-between py-4 text-white hover:text-[#44d62c] transition-colors"
                                            >
                                                <span className="text-base font-medium">{link.label}</span>
                                                <ChevronRight className="w-5 h-5" />
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
                                                    className="overflow-hidden bg-[#0a0a0a] -mx-4 px-4"
                                                >
                                                    <div className="py-4 space-y-4">
                                                        {megaMenuData[link.label as keyof typeof megaMenuData]?.categories.map((category, idx) => (
                                                            <div key={idx}>
                                                                <button
                                                                    onClick={() => setHoveredCategory(hoveredCategory === idx ? null : idx)}
                                                                    className="w-full flex items-center justify-between py-2 text-left text-[#999] hover:text-white transition-colors"
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
                                                                                    className="block py-1 text-sm text-[#777] hover:text-[#44d62c] transition-colors"
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
    );
}
