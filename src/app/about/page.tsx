import React from "react";
import { Icons } from "@/components/icons";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Let's get to know each other" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-secondary px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-primary"
            />
            <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Web Developer
            </p>
            <div className="flex flex-col items-center text-sm text-muted-foreground mt-2 space-y-1">
              <p>Sinh năm: 29/03/2004</p>
              <p>MSSV: 2280603563</p>
              <p>Lớp: 22DTHE4</p>
            </div>
            <div className="flex items-center space-x-2">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
                  )}
                >
                  <social.icon className="size-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 w-full flex flex-col items-center">
              <p className="mb-2 text-sm font-semibold">Contact Me</p>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=huutuansvip@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 w-full justify-center"
                )}
              >
                <Icons.gmail className="size-4" />
                <span>huutuansvip@gmail.com</span>
              </Link>
            </div>
          </div>
          <div className="w-full mt-4">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span className="text-primary">&lt;/&gt;</span> Kỹ năng công nghệ
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-center rounded-md bg-[#2f281e] px-4 py-2 text-sm font-semibold text-[#f7df1e]">
                JavaScript
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1c2c3e] px-4 py-2 text-sm font-semibold text-[#61dafb]">
                React
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#3e2920] px-4 py-2 text-sm font-semibold text-[#e34f26]">
                HTML & CSS
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1e2f23] px-4 py-2 text-sm font-semibold text-[#339933]">
                Node.js
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1e3329] px-4 py-2 text-sm font-semibold text-[#47a248]">
                MongoDB
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1e2c3e] px-4 py-2 text-sm font-semibold text-[#3776ab]">
                Python
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#3e1e24] px-4 py-2 text-sm font-semibold text-[#f71e2e]">
                Java
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#241e3e] px-4 py-2 text-sm font-semibold text-[#5e4e8e]">
                C / C++
              </div>
              <div className="col-span-2 flex items-center justify-center rounded-md bg-[#2d2d2d] px-4 py-2 text-sm font-semibold text-[#ffffff]">
                Unreal Engine 5
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base space-y-4">
          <h2 className="text-lg font-bold text-foreground">
            Giới thiệu bản thân
          </h2>
          <p>
            Tôi tên là Nguyễn Hoàng Hữu Tuấn, hiện đang là sinh viên năm tư ngành
            Công nghệ thông tin, chuyên ngành Mạng máy tính tại Trường Đại học
            Công nghệ TP. Hồ Chí Minh (HUTECH). Tôi bắt đầu theo học tại trường từ
            năm 2022.
          </p>
          <p>
            Trong thời gian rảnh, tôi có nhiều sở thích giúp cân bằng giữa học tập
            và cuộc sống. Tôi yêu thích chơi cầu lông vì đây là môn thể thao giúp
            rèn luyện sức khỏe và tinh thần. Bên cạnh đó, chơi game là cách để tôi
            giải trí sau những giờ học căng thẳng, đồng thời giúp rèn luyện tư duy
            phản xạ. Ngoài ra, tôi cũng có thói quen đọc sách để mở rộng kiến
            thức, trau dồi kỹ năng và học hỏi thêm nhiều góc nhìn mới trong cuộc
            sống.
          </p>
          <h2 className="text-lg font-bold text-foreground">
            Suy nghĩ về chặng đường 4 năm đại học
          </h2>
          <p>
            Chặng đường 4 năm đại học là một hành trình đầy thử thách nhưng cũng
            vô cùng ý nghĩa đối với tôi. Từ một sinh viên còn nhiều bỡ ngỡ khi mới
            bước chân vào giảng đường, tôi dần học được cách tự lập, quản lý thời
            gian và chịu trách nhiệm với lựa chọn của bản thân. Những môn học
            chuyên ngành, các bài tập nhóm và đồ án đã giúp tôi tích lũy kiến thức
            chuyên môn, đặc biệt là trong lĩnh vực mạng máy tính.
          </p>
          <p>
            Bên cạnh kiến thức, quãng thời gian đại học còn mang lại cho tôi những
            trải nghiệm, kỷ niệm và mối quan hệ đáng quý. Đây là nền tảng quan
            trọng để tôi tự tin hơn khi bước vào môi trường làm việc thực tế trong
            tương lai. Dù chặng đường phía trước còn nhiều thử thách, nhưng những
            gì đã học và trải nghiệm trong 4 năm đại học sẽ luôn là hành trang
            vững chắc đồng hành cùng tôi.
          </p>
        </div>
      </div>
    </div>
  );
}
