'use client'
import React from 'react'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react"


const About = () => {
  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const motionRef = useRef<HTMLDivElement | null>(null)
  const motionInView = useInView(motionRef, { once: true, amount: 0.25 })
  return (
    <>
      <motion.div
        id='about'
        ref={motionRef}
        variants={fromBottom}
        initial="hidden"
        animate={motionInView ? "visible" : "hidden"}
        className='relative flex flex-col justify-center items-center py-10 md:py-30 px-4 md:px-32 gap-4 md:gap-16'>
        {/* <div className='h-[46px] w-[46px] bg-primary-400 absolute top-100% left-0'></div> */}
        <div className='flex flex-col justify-center items-center gap-4 w-full'>
          <div className='text-md md:text-lg font-medium text-primary-200'>ABOUT ME</div>
          <div
            className='relative flex flex-col justify-center items-center text-2xl md:text-5xl font-extrabold text-base-white z-50'>
            <div>CRAFTING SEAMLESS</div>
            <div className='text-center max-w-[872px]'>
              <span className='text-primary-200'>HIGH-PERFORMANCE WEB </span>EXPERIENCES
            </div>
          </div>
        </div>
        <div
          className='text-md md:text-xl font-medium text-neutral-400 text-center'>I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.
        </div>
      </motion.div>
      <div className='block md:hidden'></div>
    </>
  )
}

export default About