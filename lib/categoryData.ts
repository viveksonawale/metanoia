import {
    Shield,
    Zap,
    Box,
    Lock,
    PenTool,
    Layers,
    DoorOpen,
    AppWindow,
    Building2,
    LayoutGrid,
    Factory,
    CheckCircle2,
    MoveUpRight,
    VolumeX,
    Wrench
} from "lucide-react";

export interface Feature {
    title: string;
    description: string;
    icon: any;
}

export interface Specification {
    label: string;
    value: string;
    details?: string[];
}

export interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface Application {
    title: string;
    description: string;
    image: string;
}

export interface Certification {
    name: string;
    code: string;
    description: string;
}

export interface Category {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: any;
    image: string; // New field for card background
    heroImage: string;
    features: Feature[];
    specifications: {
        category: string;
        items: Specification[];
    }[];
    gallery: GalleryImage[];
    applications: Application[];
    certifications: Certification[];
    relatedProducts: string[]; // slugs of related products
}

export const categoryData: Category[] = [
    {
        id: "fire-rated-doors",
        slug: "fire-rated-doors",
        title: "Fire Rated Doors",
        shortDescription: "Engineered specifications for high-performance industrial applications.",
        fullDescription: "Our Fire Rated Doors are engineered to provide maximum safety and protection in commercial and industrial environments. Certified to withstand extreme temperatures and prevent the spread of fire and smoke, these doors combine robust security with architectural aesthetics. Available in various fire ratings (60, 90, 120, 180 minutes), they ensure compliance with the strictest building codes while maintaining seamless operation.",
        icon: Shield,
        image: "/images/fire_rated_door_1767248959814.png",
        heroImage: "/images/hero-fire-door.jpg",
        features: [
            {
                title: "Certified Integrity",
                description: "Tested and certified to UL 10C, BS 476, and EN 1634 standards for up to 180 minutes of fire resistance.",
                icon: Shield
            },
            {
                title: "Smoke Control",
                description: "Integrated smoke seals prevent the passage of toxic fumes, ensuring safe evacuation routes.",
                icon: VolumeX
            },
            {
                title: "Heavy-Duty Construction",
                description: "Built with galvanized steel and reinforced cores for exceptional durability and impact resistance.",
                icon: Layers
            },
            {
                title: "Custom Finishes",
                description: "Available in powder-coated, wood-grain, and stainless steel finishes to match any architectural style.",
                icon: PenTool
            }
        ],
        specifications: [
            {
                category: "Dimensions",
                items: [
                    { label: "Max Width", value: "3000mm (Single), 6000mm (Double)" },
                    { label: "Max Height", value: "3000mm" },
                    { label: "Door Thickness", value: "45mm - 55mm" },
                    { label: "Frame Depth", value: "100mm - 250mm" }
                ]
            },
            {
                category: "Performance",
                items: [
                    { label: "Fire Rating", value: "60 / 90 / 120 / 180 mins" },
                    { label: "Acoustic Rating", value: "Up to 45dB" },
                    { label: "Thermal Insulation", value: "1.2 W/m²K" },
                    { label: "Cycle Testing", value: "1,000,000 cycles (Class 8)" }
                ]
            },
            {
                category: "Materials",
                items: [
                    { label: "Door Leaf", value: "1.2mm / 1.5mm Galvanized Steel" },
                    { label: "Frame", value: "1.5mm / 2.0mm Galvanized Steel" },
                    { label: "Core Types", value: "Honeycomb, Rockwool, Steel Stiffened" },
                    { label: "Finish", value: "Polyester Powder Coat (RAL Colors)" }
                ]
            }
        ],
        gallery: [
            { src: "/images/fire-door-1.jpg", alt: "Double leaf fire door in industrial setting", caption: "Industrial Double Leaf Configuration" },
            { src: "/images/fire-door-2.jpg", alt: "Wood grain finish fire door", caption: "Architectural Wood Finish" },
            { src: "/images/fire-door-detail.jpg", alt: "Hinge and lock detail", caption: "Heavy Duty Hardware" }
        ],
        applications: [
            { title: "Data Centers", description: "Protecting critical infrastructure with high-security fire barriers.", image: "/images/app-datacenter.jpg" },
            { title: "Hospitals", description: "Ensuring patient safety with smoke-sealed, hygienic door systems.", image: "/images/app-hospital.jpg" },
            { title: "Hotels", description: "Blending safety with luxury design for guest room entries.", image: "/images/app-hotel.jpg" }
        ],
        certifications: [
            { name: "UL 10C", code: "R12345", description: "Positive Pressure Fire Tests of Door Assemblies" },
            { name: "BS 476-22", code: "Cert-998", description: "Fire resistance of non-loadbearing elements of construction" }
        ],
        relatedProducts: ["windows-and-glazing-systems", "facade-and-architectural-systems", "industrial-and-custom-fabrication"]
    },
    {
        id: "windows-and-glazing-systems",
        slug: "windows-and-glazing-systems",
        title: "Windows and Glazing Systems",
        shortDescription: "Engineered specifications for high-performance industrial applications.",
        fullDescription: "Our window and glazing systems combine thermal efficiency with sleek modern aesthetics. From robust aluminium sliding systems to energy-efficient uPVC windows, we offer solutions that enhance building performance while maximizing natural light and visual appeal.",
        icon: AppWindow,
        image: "/images/windows_glazing_1767249027030.png",
        heroImage: "/images/hero-windows.jpg",
        features: [
            {
                title: "Superior Sound Blocking",
                description: "Achieves STC ratings up to 55dB, blocking aircraft, traffic, and industrial noise.",
                icon: VolumeX
            },
            {
                title: "Crystal Clear Optics",
                description: "Low-iron glass options ensure maximum transparency with zero color distortion.",
                icon: PenTool
            },
            {
                title: "Thermal Efficiency",
                description: "Double or triple glazing provides excellent thermal insulation, reducing energy costs.",
                icon: Layers
            },
            {
                title: "Vibration Control",
                description: "De-coupled frame design prevents structural vibration transmission.",
                icon: Shield
            }
        ],
        specifications: [
            {
                category: "Performance Metrics",
                items: [
                    { label: "U-Value (Window)", value: "1.2 - 2.4 W/m²K depending on glazing" },
                    { label: "Water Tightness", value: "Class 9A (600 Pa)" },
                    { label: "Wind Load Resistance", value: "Class C5 (2000 Pa)" },
                    { label: "Acoustic Insulation", value: "Up to 45dB Rw" },
                ]
            },
            {
                category: "Construction",
                items: [
                    { label: "Profile Depth", value: "60mm / 70mm / 82mm systems" },
                    { label: "Glazing Options", value: "6mm - 32mm DGU / TGU" },
                    { label: "Material", value: "uPVC / Thermal Break Aluminium" },
                    { label: "Hardware", value: "European Standard Groove / Multi-point" },
                ]
            }
        ],
        gallery: [],
        applications: [
            { title: "Residential Complexes", description: "Energy-efficient windows for modern apartments.", image: "/images/app-residential.jpg" },
            { title: "Corporate Towers", description: "Sleek glazing solutions for office facades.", image: "/images/app-office.jpg" },
            { title: "Educational Institutes", description: "Durable and safe window systems for schools.", image: "/images/app-school.jpg" },
            { title: "Hospitality", description: "Acoustic glazing for hotels and resorts.", image: "/images/app-hotel.jpg" }
        ],
        certifications: [
            { name: "EN 14351-1", code: "CE-MARK", description: "Performance characteristics for windows and doors" },
            { name: "AAMA/WDMA", code: "NAFS-11", description: "North American Fenestration Standard" }
        ],
        relatedProducts: ["facade-and-architectural-systems", "fire-rated-doors"]
    },
    {
        id: "facade-and-architectural-systems",
        slug: "facade-and-architectural-systems",
        title: "Façade & Architectural Systems",
        shortDescription: "Engineered specifications for high-performance industrial applications.",
        fullDescription: "Transform building exteriors with our advanced façade systems. We specialize in structural glazing, unitized curtain walls, and architectural cladding that define modern skylines. Our systems are engineered to accommodate structural movements while providing superior weather protection and thermal comfort.",
        icon: Building2,
        image: "/images/facade_system_1767249049916.png",
        heroImage: "/images/hero-facade.jpg",
        features: [
            {
                title: "Structural Glazing",
                description: "Seamless glass facades using high-strength structural silicone specifically for skyscrapers.",
                icon: Box,
            },
            {
                title: "Solar Control",
                description: "Integration of louvers and sunshades to optimize daylighting and reduce solar heat gain.",
                icon: Zap,
            },
            {
                title: "Wind Load Engineering",
                description: "Designed to withstand high wind pressures in high-rise applications.",
                icon: Shield,
            },
            {
                title: "Aesthetic Versatility",
                description: "Wide range of mullion depths and cover cap designs to suit architectural vision.",
                icon: PenTool,
            }
        ],
        specifications: [
            {
                category: "System Performance",
                items: [
                    { label: "System Width", value: "50mm / 60mm Standard" },
                    { label: "Thermal Insulation", value: "Uf from 0.8 W/m²K (Passive House certified)" },
                    { label: "Infiltration", value: "AE (1200Pa)" },
                    { label: "Seismic Drift", value: "Accommodates inter-story drift" },
                ]
            },
            {
                category: "Materials",
                items: [
                    { label: "Aluminium Alloy", value: "6063-T6 / 6061-T6" },
                    { label: "Finish", value: "PVDF / Anodized (25 microns)" },
                    { label: "Glass Types", value: "Laminated / Tempered / High Performance Low-E" },
                    { label: "Gaskets", value: "EPDM / Silicone compatible" },
                ]
            }
        ],
        gallery: [],
        applications: [
            { title: "Skyscrapers", description: "Unitized curtain walls for rapid installation.", image: "/images/app-tower.jpg" },
            { title: "Shopping Malls", description: "Grand entrances and skylight systems.", image: "/images/app-mall.jpg" },
            { title: "Airports", description: "Large span glazing and acoustic facades.", image: "/images/app-airport.jpg" },
            { title: "Museums", description: "Architecturally expressive envelope solutions.", image: "/images/app-museum.jpg" }
        ],
        certifications: [
            { name: "CWCT", code: "CWCT-STD", description: "Standard for systemized building envelopes" },
            { name: "ASTM E283/E331", code: "ASTM-AIR-WATER", description: "Standard Test Method for Air Leakage and Water Penetration" }
        ],
        relatedProducts: ["windows-and-glazing-systems", "industrial-and-custom-fabrication"]
    },
    {
        id: "kitchen-and-interior-solutions",
        slug: "kitchen-and-interior-solutions",
        title: "Kitchen & Interior Solutions",
        shortDescription: "Engineered specifications for high-performance industrial applications.",
        fullDescription: "Hygiene meets design in our Kitchen & Interior Solutions. We manufacture premium stainless steel modular kitchen components, storage systems, and workstations designed for commercial hygiene standards and modern residential aesthetics. Our non-porous surfaces ensure food safety and longevity.",
        icon: LayoutGrid,
        image: "/images/kitchen_interior_1767249084699.png",
        heroImage: "/images/hero-kitchen.jpg",
        features: [
            {
                title: "Hygienic Design",
                description: "Grade 304/316 stainless steel construction prevents bacterial growth and is easy to sanitize.",
                icon: CheckCircle2,
            },
            {
                title: "Modular Flexibility",
                description: "Interchangeable units allow for customizable layouts that adapt to operational workflows.",
                icon: Layers,
            },
            {
                title: "Corrosion Resistance",
                description: "Superior resistance to rust, acids, and salts common in food preparation environments.",
                icon: Shield,
            },
            {
                title: "Ergonomic Engineering",
                description: "Designed for workflow efficiency with optimal working heights and access points.",
                icon: MoveUpRight,
            }
        ],
        specifications: [
            {
                category: "Material Specs",
                items: [
                    { label: "Steel Grade", value: "AISI 304 / 316L" },
                    { label: "Sheet Thickness", value: "1.0mm - 2.0mm" },
                    { label: "Finish", value: "No. 4 Brushed / Hairline" },
                    { label: "Countertops", value: "Reinforced with waterproof plywood backing" },
                ]
            },
            {
                category: "Dimensions",
                items: [
                    { label: "Standard Depths", value: "600mm / 700mm / 750mm" },
                    { label: "Backsplash", value: "100mm / 150mm integrated" },
                    { label: "Legs", value: "Adjustable bullets feet +50mm" },
                ]
            }
        ],
        gallery: [],
        applications: [
            { title: "Commercial Kitchens", description: "Hotels, restaurants, and catering facilities.", image: "/images/app-kitchen.jpg" },
            { title: "Laboratories", description: "Sterile workstations and storage.", image: "/images/app-lab.jpg" },
            { title: "Luxury Residences", description: "Chef-style home kitchens.", image: "/images/app-home-kitchen.jpg" },
            { title: "Medical Facilities", description: "Hygienic utility rooms.", image: "/images/app-medical.jpg" }
        ],
        certifications: [
            { name: "HACCP", code: "FOOD-SAFE", description: "Compliant with food safety management systems" },
            { name: "NSF/ANSI 2", code: "NSF-2", description: "Food Equipment Standard" }
        ],
        relatedProducts: ["industrial-and-custom-fabrication", "fire-rated-doors"]
    },
    {
        id: "industrial-and-custom-fabrication",
        slug: "industrial-and-custom-fabrication",
        title: "Industrial & Custom Fabrication",
        shortDescription: "Engineered specifications for high-performance industrial applications.",
        fullDescription: "Our Industrial division provides heavy-duty fabrication solutions, from structural components to custom OEM manufacturing. Utilizing advanced laser cutting, CNC bending, and robotic welding, we deliver precision parts and assemblies that drive industrial operations.",
        icon: Factory,
        image: "/images/industrial_fabrication_1767249111072.png",
        heroImage: "/images/hero-industrial.jpg",
        features: [
            {
                title: "Precision Laser Cutting",
                description: "High-tolerance cutting for carbon steel, stainless steel, and aluminium sheets.",
                icon: Zap,
            },
            {
                title: "CNC Bending",
                description: "Complex forming capabilities with high repeatability for mass production.",
                icon: Layers,
            },
            {
                title: "Robotic Welding",
                description: "Automated MIG/TIG welding ensures consistent weld quality and structural integrity.",
                icon: Box,
            },
            {
                title: "Scalable Production",
                description: "From prototyping one-offs to large-scale volume manufacturing runs.",
                icon: MoveUpRight,
            }
        ],
        specifications: [
            {
                category: "Capacities",
                items: [
                    { label: "Laser Cutting", value: "Up to 20mm Mild Steel / 12mm SS" },
                    { label: "Bending Length", value: "Up to 4000mm" },
                    { label: "Press Force", value: "Max 300 Tonnes" },
                    { label: "Tolerance", value: "+/- 0.1mm standard" },
                ]
            },
            {
                category: "Materials Handled",
                items: [
                    { label: "Steel", value: "Mild Steel, Galvanized, CRCA, HR" },
                    { label: "Stainless Steel", value: "300 / 400 Series" },
                    { label: "Aluminium", value: "1xxx, 5xxx, 6xxx Series" },
                    { label: "Special Alloys", value: "Copper, Brass upon request" },
                ]
            }
        ],
        gallery: [],
        applications: [
            { title: "Automotive", description: "Chassis components and brackets.", image: "/images/app-auto.jpg" },
            { title: "Electrical Enclosures", description: "IP65 rated control panels and cabinets.", image: "/images/app-enclosure.jpg" },
            { title: "Infrastructure", description: "Structural supports and customized handrails.", image: "/images/app-infrastructure.jpg" },
            { title: "Machinery", description: "Machine guarding and covers.", image: "/images/app-machine.jpg" }
        ],
        certifications: [
            { name: "ISO 9001:2015", code: "QMS", description: "Quality Management System Certified" },
            { name: "EN 1090", code: "EXC-2", description: "Execution of steel structures and aluminium structures" }
        ],
        relatedProducts: ["kitchen-and-interior-solutions", "facade-and-architectural-systems"]
    }
];

