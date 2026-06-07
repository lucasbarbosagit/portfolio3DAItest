import { motion } from "framer-motion";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";

const COMPUTER_IMAGE = "/old-cyberpunk-computer.png";

const navLinks = ["About", "Price", "Projects", "Contact"];

const fadeUp = (delay: number, y = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
});

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <motion.nav
        {...fadeUp(0, -20)}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <motion.h1
          {...fadeUp(0.15, 40)}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m lucas
        </motion.h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex-1">
        <motion.p
          {...fadeUp(0.35, 20)}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </motion.p>

        <motion.div {...fadeUp(0.5, 20)}>
          <ContactButton />
        </motion.div>
      </div>

      {/* Hero Portrait — Retro Computer */}
      <motion.div
        {...fadeUp(0.6, 30)}
        className="absolute left-1/4 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={COMPUTER_IMAGE}
            alt="Retro 3D Computer"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[1000px] object-contain drop-shadow-2xl"
          />
        </Magnet>
      </motion.div>
    </section>
  );
}
