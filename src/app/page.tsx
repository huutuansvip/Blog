import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl text-center lg:text-left w-full">
          WELLCOME
        </h1>
        <div className="w-full text-center lg:text-left space-y-2">

          <div className="text-3xl md:text-5xl lg:text-7xl font-playfair leading-tight tracking-wide text-center lg:text-left">
            <span className="block font-medium italic text-muted-foreground/80">Work hard in silence</span>
            <span className="block font-bold mt-2 text-foreground">Let success make noise</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full justify-center lg:justify-start">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80"
              )}
            >
              <social.icon className="size-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center lg:justify-start">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "border"
            )}
          >
            🎉 My Blog
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted shadow-xl lg:aspect-square">
          <Image
            src="/images/welcome-image.jpg"
            alt="Welcome"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
