import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'
import FadeIn from '../components/FadeIn'

const PROJECTS = [
  {
    num: '01', name: 'Nextlevel Studio', category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02', name: 'Aura Brand Identity', category: 'Personal',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03', name: 'Solaris Digital', category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

const IMG_RADIUS = { borderRadius: 'clamp(24px, 4vw, 60px)' }

function ProjectCard({ project, index, progress }: { project: typeof PROJECTS[0]; index: number; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.03
  const scale = useTransform(progress, [index / PROJECTS.length, 1], [1, targetScale])

  return (
    <div className="h-[85vh]">
      <motion.div
        className="sticky w-full max-w-6xl mx-auto border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
        style={{ scale, top: `${96 + index * 28}px`, transformOrigin: 'top center' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{project.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] uppercase tracking-wider text-sm opacity-60">{project.category}</span>
              <span className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{project.name}</span>
            </div>
          </div>
          <LiveProjectButton />
        </div>
        <div className="flex gap-3 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4" style={{ flex: '0 0 40%' }}>
            <img src={project.col1[0]} alt="" className="w-full object-cover" style={{ ...IMG_RADIUS, height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={project.col1[1]} alt="" className="w-full object-cover" style={{ ...IMG_RADIUS, height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <div style={{ flex: '0 0 calc(60% - 12px)' }}>
            <img src={project.col2} alt="" className="w-full object-cover" style={{ ...IMG_RADIUS, height: 'clamp(306px, 38vw, 586px)' }} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32">
      <FadeIn>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.num} project={project} index={index} progress={scrollYProgress} />
      ))}
    </section>
  )
}
