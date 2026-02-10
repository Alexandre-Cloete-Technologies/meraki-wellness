'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Massages",
      description: "Deep tissue relief using traditional African Rungu wooden sticks.",
      image: "/images/four-hands-massage.jpeg",
    },
    {
      title: "Eyebrows",
      description: "Melting away tension with smooth, heated volcanic stones.",
      image: "/images/eyebrows-services.jpg",
    },
    {
      title: "Facials",
      description: "Advanced skin rejuvenation science meeting luxury relaxation.",
      image: "/images/meraki-chemical-peel.webp",
    },
    {
      title: "Waxings",
      description: "Synchronized massage for the ultimate relaxing experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVAmORnTRHcitZKZVtpmpG2Db1aytKhgbGD-81m82-juikwTgrLTRkHxY87Uk-Um1ejZrde73qkwHdlQEMO6cUNipq5QsbBYOgUw73uCl7JRwjXyoi-Ci_4zIgTSjXbs8mlYTmxCYrsdy5Fh0g99S7LWoqEqhcwJaJqa9ESyP-qRNKZ8bc26o17WE_-hS_87ov7MihH9HZ3G7PmwwKml_lPzLGAKEpL8Z3JV3PtLwfjvx8tT0jd0lCO74u9vPYN1vur35kX_ltm_Q",

    },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 text-[300px] leading-none text-primary/5 font-serif-display select-none -z-10 translate-y-20">
        1
      </div>
      <div className="text-center mb-20 relative z-10">
        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
          Our Menu
        </span>
        <h2 className="text-secondary text-4xl md:text-6xl font-serif-display font-medium mb-6">
          Signature Experiences
        </h2>
        <div className="w-px h-16 bg-primary/40 mx-auto" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut" },
              },
            }}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-full aspect-square max-w-[280px] rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
              <Image
                alt={service.title}
                src={service.image}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-secondary text-2xl font-serif-display font-medium mb-3">
              {service.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 px-4">
              {service.description}
            </p>
            <Link
              href="#"
              className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            >
              Discover
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
