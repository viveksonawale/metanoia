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

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [phoneNumber, setPhoneNumber] = useState("");

    const validateForm = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Phone validation (allows +, spaces, dashes, parentheses, 10+ digits)
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // Basic international-friendly regex
        // Or simpler one: at least 10 digits
        const simplerPhoneRegex = /^\+?[\d\s-]{10,}$/;

        if (!phone || !simplerPhoneRegex.test(phone)) {
            newErrors.phone = "Please enter a valid phone number (min 10 digits).";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmitError(null);
        setIsSubmitting(true);

        try {
            const payload = {
                fullName: formData.get("fullName"),
                companyName: formData.get("companyName"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                message: formData.get("message") || null,
            };

            const response = await fetch("https://metanoia-backend-o7gb.onrender.com/api/sales-enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit enquiry.");
            }

            setIsSubmitting(false);
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setSubmitError("Something went wrong. Please try again later.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border p-8 md:p-12 text-center rounded-sm shadow-sm relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 center w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Enquiry Received
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                    Thank you. Our sales team will review your project requirements and contact you shortly.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-accent font-medium bg-secondary px-4 py-2 rounded-sm border border-border">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Typically responds within 1 business day
                </div>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name <span className="text-accent">*</span></Label>
                    <Input id="fullName" name="fullName" required placeholder="Enter your full name" className="rounded-sm" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name <span className="text-accent">*</span></Label>
                    <Input id="companyName" name="companyName" required placeholder="Enter company name" className="rounded-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-accent">*</span></Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your work email"
                        className={`rounded-sm ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        onChange={() => {
                            if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                        }}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Number <span className="text-accent">*</span></Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        className={`rounded-sm ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Remove any character that is not a digit, space, plus, dash, or parenthesis
                            // This effectively prevents entering alphabets
                            const sanitized = value.replace(/[^\d+\-\s()]/g, "");
                            setPhoneNumber(sanitized);

                            if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                        }}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
            </div>



            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project specifications, timeline, and any specific requirements..."
                    className="min-h-[150px] rounded-sm"
                />
            </div>

            <Button
                type="submit"
                size="lg"
                variant="accent"
                className="w-full text-lg h-14 rounded-sm"
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
            {submitError && (
                <p className="text-sm text-red-500 text-center mt-2">{submitError}</p>
            )}

            <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our privacy policy. Your information will be routed directly to our sales engineering team.
            </p>
        </form>
    );
}
