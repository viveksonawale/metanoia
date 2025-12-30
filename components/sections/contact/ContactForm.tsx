"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border p-8 md:p-12 text-center rounded-lg shadow-2xl relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 center w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Enquiry Received
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                    Thank you. Our sales team will review your project requirements and contact you shortly.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-primary font-medium bg-primary/5 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Typically responds within 1 business day
                </div>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName">Full Name <span className="text-primary">*</span></Label>
                    <Input id="firstName" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company Name <span className="text-primary">*</span></Label>
                    <Input id="company" required placeholder="Acme Industries" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Work Email <span className="text-primary">*</span></Label>
                    <Input id="email" type="email" required placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-primary">*</span></Label>
                    <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <Label htmlFor="category">Product Category <span className="text-primary">*</span></Label>
                    <Select id="category" required defaultValue="">
                        <option value="" disabled>Select a Category</option>
                        <option value="doors">Industrial Doors</option>
                        <option value="windows">High-Performance Windows</option>
                        <option value="facade">Façade Systems</option>
                        <option value="kitchen">Commercial Kitchens</option>
                        <option value="custom">Custom Fabrication</option>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type <span className="text-primary">*</span></Label>
                    <Select id="projectType" required defaultValue="">
                        <option value="" disabled>Select Project Type</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="residential">High-End Residential</option>
                        <option value="infrastructure">Public Infrastructure</option>
                        <option value="other">Other</option>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="scope">Estimated Quantity / Scope <span className="text-primary">*</span></Label>
                <Input id="scope" required placeholder="e.g. 500 sq ft, 20 units, entire facility..." />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message / Requirements</Label>
                <Textarea
                    id="message"
                    placeholder="Describe your project specifications, timeline, and any specific requirements..."
                    className="min-h-[150px]"
                />
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    "Submit Sales Enquiry"
                )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our privacy policy. Your information will be routed directly to our sales engineering team.
            </p>
        </form>
    );
}
