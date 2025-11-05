'use client'
import React from 'react'
import Image from 'next/image'
import { ProfesionalData } from '@/constants/profesional-data'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react"

const Profesional = () => {
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -24 }, // awal: geser kiri + transparan
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 2 }
    }
  }
  const rightVariants: Variants = {
    hidden: { opacity: 0 }, // awal: geser kanan + transparan
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 2 }
    }
  }
  const topVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  const lineVariants = (percent: number): Variants => ({
    hidden: { height: "0%" },
    visible: {
      height: `${percent}%`,
      transition: { duration: 2, ease: "easeInOut", delay: 0.6 }
    }
  })
  const motionRef = useRef<HTMLDivElement | null>(null)
  const motionInView = useInView(motionRef, { once: true, amount: 0.25 })
  return (
    <div
      id='project'
      className='flex flex-col justify-center gap-16 px-4 md:px-32 py-10 md:py-20 w-full'>
      <motion.div
        ref={motionRef}
        variants={topVariants}
        initial="hidden"
        animate={motionInView ? "visible" : "hidden"}
        className='flex flex-col justify-center items-center gap-2'>
        <p className='text-lg font-medium text-primary-200'>EXPERINCE</p>
        <h1 className='text-2xl md:text-5xl font-extrabold text-neutral-50'>PROFESIONAL WORK</h1>
      </motion.div>
      <div className='hidden md:block'>
        {ProfesionalData.map((data, idx) => {
          const num = (idx + 1);
          const isGanjil = num % 2 !== 0;
          return (
            <div key={data.id} className="relative grid grid-cols-9">
              <motion.div
                ref={motionRef}
                variants={leftVariants}
                initial="hidden"
                animate={motionInView ? "visible" : "hidden"}
                className="grid col-span-4">
                <div className={`${isGanjil ? "hidden" : "block"} flex flex-col justify-start p-6 gap-4 border border-neutral-800 rounded-xl w-full`}>
                  <div className="flex flex-col lg:flex-row justify-start gap-4">

                    <div className="flex flex-col gap-1 w-full">
                      <div className="text:md lg:text-lg font-medium text-neutral-400">{data.years}</div>
                      <div className="text:xl lg:text-2xl font-bold text-base-white">
                        {data.title}
                      </div>
                    </div>

                    <Image src={data.logo} alt={data.logoTittle} width={114} height={48} />
                  </div>

                  <div className="text-base text-neutral-400 w-full">{data.desc}</div>
                </div>
              </motion.div>

              <div className="relative grid h-full place-items-center">
                {/* Garis di belakang, pas di tengah kolom */}
                <motion.span
                  ref={motionRef}
                  variants={lineVariants(100)}
                  initial="hidden"
                  animate={motionInView ? "visible" : "hidden"}
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-800 z-0"
                >
                </motion.span>

                {/* Bulatan di atas garis */}
                <motion.div
                  ref={motionRef}
                  variants={topVariants}
                  initial="hidden"
                  animate={motionInView ? "visible" : "hidden"}
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-black">
                  <span className="text-base font-bold text-primary-200">{idx + 1}</span>
                </motion.div>
              </div>


              <motion.div
                ref={motionRef}
                variants={rightVariants}
                initial="hidden"
                animate={motionInView ? "visible" : "hidden"}
                className="grid col-span-4">
                <div className={`${isGanjil ? "block" : "hidden"} flex flex-col justify-start p-6 gap-4 border border-neutral-800 rounded-xl`}>
                  <div className="flex flex-col lg:flex-row justify-start gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="text:md lg:text-lg font-medium text-neutral-400">{data.years}</div>
                      <div className="text:xl lg:text-2xl font-bold text-base-white">
                        {data.title}
                      </div>
                    </div>

                    <Image src={data.logo} alt={data.logoTittle} width={114} height={48} />
                  </div>

                  <div className="text-base text-neutral-400 w-full">{data.desc}</div>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
      <div className='block md:hidden'>
        {ProfesionalData.map((data, idx) => {
          return (
            <div key={data.id} className="relative grid grid-cols-5">
              <div className="relative grid h-full place-items-center">
                {/* Garis di belakang, pas di tengah kolom */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-800 z-0"
                />

                {/* Bulatan di atas garis */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-black">
                  <span className="text-base font-bold text-primary-200">{idx + 1}</span>
                </div>
              </div>

              <div className="grid col-span-4">
                <div className={`flex flex-col justify-start p-6 gap-4 border border-neutral-800 rounded-xl`}>
                  <div className="flex flex-col lg:flex-row justify-start gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="text:sm md:text-md font-medium text-neutral-400">{data.years}</div>
                      <div className="text:lg md:text-xl font-bold text-base-white">
                        {data.title}
                      </div>
                    </div>

                    <Image src={data.logo} alt={data.logoTittle} width={114} height={48} />
                  </div>

                  <div className="text-base text-neutral-400 w-full">{data.desc}</div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      <div>
      </div>
    </div >
  )
}

export default Profesional