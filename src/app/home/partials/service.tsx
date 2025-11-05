"use client"


import React from "react";
import Image from 'next/image'
import { serviceData } from '@/constants/service-data'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react"

const Service = () => {
  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const progressVariants = (percent: number): Variants => ({
    hidden: { width: "0%" },
    visible: {
      width: `${percent}%`,
      transition: { duration: 1, ease: "easeInOut", delay: 0.6 }
    }
  })
  const leftRef = useRef<HTMLDivElement | null>(null)
  const leftInView = useInView(leftRef, { once: true, amount: 0.25 })

  return (
    <div
      id="service"
      className='flex flex-col gap-16 py-10 md:py-30 px-4 md:px-30 animate-easeIn'>
      <motion.div
        ref={leftRef}
        variants={fromBottom}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        className='flex flex-col md:flex-row justify-start lg:justify-between items-center gap-4'>
        <div
          className='flex flex-col justify-start gap-2 w-full md:w-[509px]'>
          <div className='text-md md:text-lg font-medium text-primary-200'>Services</div>
          <div className='text-md md:text-2xl font-extrabold text-base-white'>MY SERVICE EXPERTISE</div>
        </div>
        <div
          className='text-md md:text-xl font-medium text-neutral-400 md:text-right w-full md:w-[504px]'>
          Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.
        </div>
      </motion.div>
      <motion.div
        ref={leftRef}
        variants={fromBottom}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10'>
        {serviceData.map((data) => (
          <div className='flex flex-col gap-6 justify-start' key={data.no}>
            <div className='text-md md:text-xl font-semibold text-neutral-400'>{data.no}</div>
            <motion.div
              ref={leftRef}
              variants={progressVariants(100)}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              className='w-full h-[1px] bg-neutral-800'></motion.div>
            <Image src="/icon/icon-pc.png" height={32} width={32} alt={data.imgtittle} />
            <div className='text-xl md:text-2xl font-semibold text-base-white'>{data.title}</div>
            <div className='text-md md:text-lg font-regular text-neutral-400'>{data.desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Service