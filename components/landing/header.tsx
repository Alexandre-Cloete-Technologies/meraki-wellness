"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-[#e6dec8] shadow-sm">
      {/* Kept padding removal as per user edit, relies on logo/items for height */}
      <div className="px-4 md:px-10 py-2 max-w-7xl mx-auto flex items-center justify-center relative">
        
        {/* Left Navigation (3 items) - Pushed towards center using flex-1 justify-end */}
        {/* "Home", "Treatments", "About" */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-10 mr-12">
          {["Home", "Treatments", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="text-text-main hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Logo - Centered in flow */}
        <div className="flex-none relative z-10">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full overflow-hidden">
              <Image
                alt="Meraki Logo"
                src="/images/Meraki-logo-nobg.png"
                fill
                className="object-cover scale-200"
              />
            </div>
          </Link>
        </div>

        {/* Right Navigation (3 items) - Pushed towards center using flex-1 justify-start */}
        {/* "Gallery", "Contact", "Book Now" */}
        <div className="hidden md:flex flex-1 justify-start items-center gap-10 ml-12">
          {["Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-main hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
          
          {/* Booking Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:shadow-lg active:scale-95 h-auto">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-background-light border-[#e6dec8]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-text-main text-center">
                  Choose Your Location
                </DialogTitle>
                <DialogDescription className="text-text-secondary text-center">
                  Select which Meraki Wellness location to book at
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-6">
                <Link
                  href="https://www.fresha.com/p/hendrina-nghifitikeko-5979906"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6dec8] bg-white hover:border-primary hover:shadow-md transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                        Eros
                      </h3>
                      <p className="text-sm text-text-secondary">
                        150 Olof Palme street, Eros
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-2xl text-text-secondary group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </Link>
                <Link
                  href="https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6dec8] bg-white hover:border-primary hover:shadow-md transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                        The Village
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Unit 16, The Village, Liliencrone street, Eros
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-2xl text-text-secondary group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button - Absolute positioned to stay on right */}
        {/* <button className="md:hidden absolute right-4 text-secondary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button> */}
      </div>
    </header>
  );
}