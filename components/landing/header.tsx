import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-[#e6dec8] shadow-sm">
      <div className="px-4 md:px-10 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden ">
              <Image
                alt="Meraki Logo"
                src="/images/Meraki-logo.webp"
                fill
                className="object-cover scale-200"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            {["Home", "Services", "About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-text-main hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:shadow-lg active:scale-95 h-auto">
            Book Now
          </Button>
        </div>
        <button className="md:hidden text-secondary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
