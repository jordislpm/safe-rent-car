import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

function Footer() {
  const socialIcons: Record<string, string> = {
    Discord: "/discord.svg",
    Twitter: "/twitter.svg",
    Facebook: "/facebook.svg",
    GitHub: "/github.svg",
  };

  return (
    <footer className="flex flex-col text-black-100 mt-16 border-t border-gray-100 bg-white">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col justify-start items-start gap-4 max-w-sm">
          <Link href="/">
            <Image
              src="/logo-safe.svg"
              alt="logo_safe-rent-car"
              width={130}
              height={32}
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed">
            Safe Rent Car provides premium, reliable, and frictionless vehicle rentals with upfront pricing and zero hidden fees.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Safe Rent Car Inc. All rights reserved.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-gray-900 text-base">{link.title}</h3>
              <div className="flex flex-col gap-3">
                {link.links.map((item) => {
                  const isExternal = item.url.startsWith("http");
                  const icon = socialIcons[item.title];

                  if (isExternal) {
                    return (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-blue text-sm transition-colors flex items-center gap-2"
                      >
                        {icon && (
                          <Image src={icon} alt={item.title} width={18} height={18} />
                        )}
                        <span>{item.title}</span>
                      </a>
                    );
                  }

                  return (
                    <Link
                      href={item.url}
                      key={item.title}
                      className="text-gray-500 hover:text-primary-blue text-sm transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center sm:px-16 px-6 py-6 gap-4 text-xs text-gray-500">
          <p>
            Developed by{" "}
            <a
              href="https://www.jordisdev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-blue hover:underline"
            >
              jordisdev.com
            </a>
          </p>

          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-primary-blue transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
