"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const CERTIFICATES = [
    {
        title: "Networking Basics",
        image: "/images/certificates/networking-basics.png",
        date: "Nov 16, 2025",
        skills: ["Network Topologies", "TCP/IP layers", "Network Services"],
        issuer: "Cisco",
    },
    {
        title: "Introduction to Cybersecurity",
        image: "/images/certificates/intro-cybersecurity.png",
        date: "Nov 25, 2024",
        skills: ["Cyber Threats", "Network Security", "Protection Measures"],
        issuer: "Cisco",
    },
    {
        title: "JavaScript Essentials 2",
        image: "/images/certificates/js-essentials-2.png",
        date: "Dec 8, 2025",
        skills: ["OOP", "Advanced Functions", "Error Handling"],
        issuer: "OpenEDG",
    },
    {
        title: "JavaScript Essentials 1",
        image: "/images/certificates/js-essentials-1.png",
        date: "Nov 24, 2025",
        skills: ["JS Basics", "Control Flow", "Data Types"],
        issuer: "OpenEDG",
    },
];

export function CertificatesList() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {CERTIFICATES.map((cert) => (
                <Dialog key={cert.title}>
                    <DialogTrigger asChild>
                        <div className="group relative cursor-pointer overflow-hidden rounded-lg border bg-background p-4 transition-all hover:bg-accent/40 hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={600}
                                    height={400}
                                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <h3 className="font-bold leading-none tracking-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {cert.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0 shadow-none">
                        <div className="relative w-full h-auto aspect-[1.414/1] rounded-lg overflow-hidden bg-white">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
