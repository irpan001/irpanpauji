"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react"
import { SocialData } from '@/constants/social-data'

const Hero = () => {
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -24 }, // awal: agak geser ke kiri & transparan
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: "easeOut" } // animasi halus 0.6s
    }
  }

  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const leftRef = useRef<HTMLDivElement | null>(null)
  const leftInView = useInView(leftRef, { once: true, amount: 0.25 })

  const to = 'irpanpauji.dev@gmail.com'
  const subject = 'HIRE: Junior Frontend Developer Opportunity'
  const body = `Hello Irpan Pauji,

I came across your profile and was impressed by your experience and projects as a Junior Frontend Developer.

We’d like to discuss a potential opportunity that aligns with your skills in React, TypeScript, and modern frontend development. Please share your updated CV and your current availability for a short interview.

Best regards,
[Your Full Name]
[Your Company Name]
[Your Position]`

  return (
    <section
      id='contact'
      className='flex flex-wrap items-center pt-15 md:pt-[141px] px-4 md:px-32'>
      {/* kiri */}
      <motion.div
        ref={leftRef}
        variants={leftVariants}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-[5.9] md:basis-80 z-20">
        <div className='flex flex-col max-w-[807-px] items-start gap-15 mb-10 mt-10'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex items-center justify-start gap-4'>
              <div className='h-[1px] w-[21px] md:w-[114px] bg-white'></div>
              <div className='text-medium md:text-xl font-medium text-base-white'>Hi, I am Irpan Pauji Frontend Developer</div>
            </div>
            <div
              className='text-lg md:text-5xl font-extrabold text-base-white'>
              BUILDING FAST &
              <span className='text-primary-200'> INTERACTIVE </span>
              WEB EXPERIENCES.
            </div>
            <div className='text-lg md:text-xl font-medium text-neutral-400'>Bridging creativity and functionality to deliver stunning, user-friendly web applications</div>
          </div>
          <div className='flex flex-col justify-between items-center gap-6 '>
            <div className='flex flex-row justify-between gap-6'>
              <Button
                asChild
                className="w-[150px] md:w-[300px] h-16 text-medium font-bold"
              >
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HIRE ME
                </a >
              </Button >
              {
                SocialData.map((data) => (
                  <div
                    key={data.id}
                    className='w-16 h-16'>
                    <Link
                      target='_blank' href={data.link}>
                      <Image
                        src={data.icon}
                        alt={data.name}
                        width={64}
                        height={64}
                      />
                    </Link>
                  </div>
                ))
              }

            </div >
          </div >

        </div >
      </motion.div >
      {/* kanan */}
      < motion.div
        ref={leftRef}
        variants={fromBottom}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-[4.1] md:basis-80" >
        <div>
          <Image
            src="/images/image-me.png"
            alt="hero-image"
            width={747}
            height={747}
            className='hidden lg:block'
          />
        </div>
      </motion.div >
    </section >
  )
}

export default Hero