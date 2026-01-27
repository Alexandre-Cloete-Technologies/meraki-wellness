import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#2c1e1a] to-[#1a110e] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="relative w-20 h-20 rounded-full mb-2 flex items-center justify-center overflow-hidden ">
                          <Image
                            alt="Meraki Logo"
                            src="/images/Meraki-logo.webp"
                            fill
                            className="object-cover scale-200"
                          />
                        </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              An oasis of calm in Windhoek. Restoring balance through African
              tradition and international expertise.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-accent-burgundy transition-all"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-accent-burgundy transition-all"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378a3.07 3.07 0 11-4.646 3.328 3.07 3.07 0 014.646-3.328zM12 8.309a3.691 3.691 0 100 7.382 3.691 3.691 0 000-7.382zm5.719-3.23a1.188 1.188 0 11-2.376.002 1.188 1.188 0 012.376-.002z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-serif-display text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-serif-display text-lg mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white/50 text-sm mt-1">
                  location_on
                </span>
                <span>
                  123 Sam Nujoma Drive,
                  <br />
                  Klein Windhoek, Namibia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/50 text-sm">
                  call
                </span>
                <span>+264 61 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/50 text-sm">
                  mail
                </span>
                <span>relax@merakiwellness.na</span>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-serif-display text-lg mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Meraki Wellness Centre. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Designed and Developed by <span className="font-bold">ACT</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
