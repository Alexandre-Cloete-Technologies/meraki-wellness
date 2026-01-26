import Link from "next/link";
import Image from "next/image";

export function Gallery() {
  const images = [
    "/images/meraki-gallery-1.jpeg",
    "/images/meraki-gallery-2.jpeg",
    "/images/meraki-gallery-3.jpeg",
    "/images/meraki-gallery-6.jpeg",
    "/images/meraki-gallery-4.jpeg",
    "/images/meraki-gallery-5.jpeg",
  ];

  return (
    <section id="gallery" className="bg-[#f2ebe0] py-24 relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-secondary text-4xl md:text-5xl font-serif-display font-medium mb-2">
              Journey to Tranquility
            </h2>
            <p className="text-text-muted font-light">
              A glimpse into our sanctuary
            </p>
          </div>
          <Link
            href="#"
            className="hidden md:block text-primary text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors mt-6 md:mt-0"
          >
            View Full Gallery
          </Link>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                alt="Spa gallery image"
                src={src}
                width={500}
                height={500}
                className="w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
