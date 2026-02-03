import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
                src="/images/Meraki-logo.webp"
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
          <Link href="https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91" target="_blank">
            <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:shadow-lg active:scale-95 h-auto">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button - Absolute positioned to stay on right */}
        <button className="md:hidden absolute right-4 text-secondary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}