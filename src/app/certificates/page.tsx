import React from "react";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import { CertificatesList } from "@/components/certificates-list";

export const metadata: Metadata = {
    title: "Chứng chỉ & Thành tựu",
    description: "Các chứng chỉ và thành tựu đã đạt được",
};

export default function CertificatesPage() {
    return (
        <div className="container relative max-w-4xl py-6 lg:py-10">
            <PageHeader
                title="Chứng chỉ & Thành tựu"
                description="Quá trình học tập và phát triển bản thân"
            />
            <hr className="my-8" />
            <CertificatesList />
        </div>
    );
}
