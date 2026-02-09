'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-[#f2ebe0] py-24 relative overflow-hidden">
     
      <div className="absolute inset-0 top-20 z-0 overflow-hidden pointer-events-none opacity-[0.4] select-none" aria-hidden="true">
        <div className="flex flex-col gap-10 ">
          {Array.from({ length: 1 }).map((_, i) => (
            <div key={i} className={`flex gap-40 whitespace-nowrap ${i % 2 === 0 ? '-translate-x-40' : 'translate-x-40'}`}>
              {Array.from({ length: 15 }).map((_, j) => (
                <span key={j} className="text-[250px] font-serif-display text-white leading-none uppercase tracking-tighter">
                  Our Vision
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative py-16 z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                alt="Outdoor Photo of Meraki Wellness Centre"
                src="/images/meraki-vision.jpeg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl flex gap-8 border border-[#e6dec8]">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl">
                  verified
                </span>
                <span className="text-secondary text-[10px] uppercase tracking-widest font-bold mt-2">
                  CIDESCO
                </span>
              </div>
              <div className="w-px h-10 bg-[#e6dec8]" />
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl">
                  award_star
                </span>
                <span className="text-secondary text-[10px] uppercase tracking-widest font-bold mt-2">
                  ITEC
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
              WHO WE ARE
            </h3>
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium tracking-tighter leading-[1.1] mb-8">
Namibian Excellence meets 
              Wellness Innovation
            </h2>
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light">
              At Meraki Wellness Centre, we bring you a unique blend of ancient
              African healing wisdom and modern wellness science. Our sanctuary
              is more than just a spa; it&apos;s a homage to the warmth of the
              Namibian spirit.
            </p>
            <p className="text-text-main text-lg mb-10 leading-relaxed font-light">
              Our internationally certified team ensures that every touch is
              purposeful and every treatment meets the highest global standards.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-[1px] bg-primary" />
              <button className="text-secondary hover:text-primary transition-colors font-serif-display italic text-xl">
                Read Our Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
     

      
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/3 relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ">
              <Image
                alt="Outdoor Photo of Meraki Wellness Centre"
                src="/images/Meraki-logo.webp"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-2 z-20 bg-white p-1 rounded-2xl shadow-md flex gap-8 border border-[#e6dec8]">
              <div className="flex flex-col items-center">
               <div className="relative overflow-hidden rounded-lg ">
              <Image
                alt="Namibian Flag"
                src="/images/Flag_of_Namibia.png"
                width={800}
                height={600}
                className="w-20 object-cover"
              />
            </div>
              </div>
              
              
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Connection. Balance. Tradition.
            </h3>
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1] mb-8">
              Authentic African Wellness
              {/* <span className="italic">Connection. Balance. Tradition.</span> */}
            </h2>
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light">
              Founded and proudly owned by Namibian women, Meraki is built on a deep understanding of self-care and holistic well-being. 
            </p>
            <p className="text-text-main text-lg mb-4 leading-relaxed font-light">
              While the concept of spas has traditionally been rooted in European traditions, Meraki Wellness
Center introduces wellness within an authentic African context one that values connection, balance,
and cultural identity. 
            </p>
             <p className="text-text-main text-lg mb-4 leading-relaxed font-light">
               Our treatments are thoughtfully designed to combine time-honored African
wellness traditions with modern therapeutic techniques, offering a truly unique and meaningful
experience.
            </p>
            
            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ">
              <Image
                alt="Outdoor Photo of Meraki Wellness Centre"
                src="/images/meraki-vision.jpeg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
           
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Our Story
            </h3>
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1] mb-8">
            Training Hands, <br/><span className="italic">Transforming Lives</span>
            </h2>
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light">
              Hendrina started Meraki with a simple belief: when women support women, incredible things happen. Every therapist here has been personally trained by her—learning not just technique, but the heart behind every treatment.
            </p>
            <p className="text-text-main text-lg mb-4 leading-relaxed font-light">
              We&apos;re proud to hold international certifications, but what really matters to us is creating real opportunities for women in wellness—careers with purpose, growth, and the chance to thrive.
            </p>
             <p className="text-text-main text-lg mb-4 leading-relaxed font-light">
               This isn&apos;t just a business. It&apos;s proof that women-led dreams can become world-class realities—and we&apos;re just getting started.
            </p>
            
            
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="w-full lg:w-full order-1 lg:order-2">
            <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Core Meraki Values
            </h3>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: -20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              },
            }}
            className="flex  flex-row mb-16 text-left items-center text-center gap-4"
            >
              
<div className="flex flex-col items-start gap-2 w-1/2">

            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1]">
              Authenticity 
              
            </h2>
               
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light w-full">
              We honor and celebrate Africa&apos;s rich cultural heritage by incorporating traditional
wellness practices, indigenous ingredients, and African-inspired design into every aspect
of our services.
            </p>
</div>
 <div className="relative overflow-hidden rounded-lg w-1/4">
              <Image
                alt="Namibian Flag"
                src="/images/meraki-authenticity.jpg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>

            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              },
            }}
            className="flex flex-row-reverse mb-16 text-left items-center text-center gap-4"
            >
         
         <div className="flex flex-col items-start gap-2 w-1/2">


            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1]">
              Excellence 
              
            </h2>
               
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light w-3/4">
              We are committed to delivering exceptional service through professional expertise, attention to detail, and continuous improvement, ensuring every client experience
reflects our premium standards.
            </p>
         </div>
 <div className="relative overflow-hidden rounded-lg w-1/4">
              <Image
                alt="Namibian Flag"
                src="/images/excellence-meraki.jpg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>

            </motion.div>
             <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              },
            }}
            className="flex flex-row mb-16 text-left items-center text-center gap-4"
            >
            
<div className="flex flex-col items-start gap-2 w-1/2">

            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1]">
              Personalized Care 
              
            </h2>
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light w-full">
             We believe wellness is personal. Building meaningful relationships with our clients allows
us to tailor treatments that meet individual needs and enhance overall well-being.
            </p>
</div>

 <div className="relative overflow-hidden rounded-lg w-1/4">
              <Image
                alt="Namibian Flag"
                src="/images/personalized-care-meraki.jpg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            
                </div>
            </motion.div>

              <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              },
            }}
            className="flex flex-row-reverse mb-8 text-left items-center text-center gap-4"
            >
           

            
            <div className="flex flex-col items-start gap-2 w-1/2">
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1]">
              Tranquility & Balance
              
            </h2>
            
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light w-full">
             We create serene, immersive environments that encourage relaxation, mindfulness, and
holistic harmony between the body, mind, and soul.
            </p>

            </div>
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }} className="relative h-full max-h-[80vh] w-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl mx-auto">
               <iframe
                src="https://www.youtube.com/embed/S868YE1eRlQ?autoplay=1&mute=1&controls=0&loop=1&playlist=S868YE1eRlQ"
                className="w-full h-full pointer-events-none scale-105"
                title="Tranquility & Balance Core value"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            </motion.div>

              <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 1.2 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              },
            }}
            className="flex flex-row mb-8 text-left items-center text-center gap-4"
            >
            
            <div className="flex flex-col items-start gap-2 w-1/2">
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1]">
              Sustainability & Community 
              
            </h2>
              
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light w-full">
             We strive to operate responsibly by supporting local communities, promoting
sustainable practices, and empowering African entrepreneurs and
professionals within the spa and wellness industry.
            </p>

            </div>
 <div className="relative overflow-hidden rounded-lg w-1/4">
              <Image
                alt="Namibian Flag"
                src="/images/sustainability-and-community-meraki.jpg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
            </motion.div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
}
