'use client'
import React from 'react'
import Image from 'next/image'
import { IconData } from '@/constants/icon-data'
import { skillsData } from '@/constants/skill-data'
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react"
type CounterProps = {
  value: number
  duration?: number
}
const Skills = () => {
  const Counter = ({ value, duration = 2 }: CounterProps) => {
    const count = useMotionValue(0) // mulai dari 0
    const rounded = useTransform(count, latest => Math.floor(latest)) // bulatkan ke int
    const [display, setDisplay] = useState(0)

    useEffect(() => {
      const controls = animate(count, value, { duration: 2 }) // animasi 2 detik
      rounded.on("change", v => setDisplay(v))                // update display
      return () => controls.stop()
    }, [value, duration])
    return <span>{display}%</span>
  }


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

  const progressVariants = (percent: number): Variants => ({
    hidden: { width: "0%" },
    visible: {
      width: `${percent}%`,
      transition: { duration: 2, ease: "easeInOut" }
    }
  })
  // ref + inView untuk section Skills
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.25 })
  // -> true kalau minimal 25% elemen keliatan, dan cuma sekali trigger

  return (
    <div
      id='skills'
      ref={skillsRef}
      className='flex flex-col lg:flex-row md:justify-between md:items-center gap-10 md:gap-[58px] py-10 md:py-20 px-4 md:px-32'>
      <div className='flex flex-col justify-start gap-[58px]'>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className='flex flex-col justify-center gap-2'>
          <div className='text:md md:text-lg font-medium text-primary-200'>SKILLS</div>
          <div className='text-3xl font-extrabold text-base-white'>SKILLS THAT BRING <br />IDEAS TO LIFE</div>
        </motion.div>
        <div className='flex flex-wrap gap-6 items-center max-w-60 md:max-w-80'>
          {IconData.map((data) => (
            <motion.div
              key={data.id}
              variants={leftVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              className='flex justify-center items-center w-[48px] h-[48px] md:w-[64px] md:h-[64px] border-1 border-neutral-800 rounded-full'>
              <Image src={data.icon} width={40} height={40} alt={data.title}></Image>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-start gap-6'>
        {skillsData.map((data) => (
          <div
            key={data.id}
            className='flex flex-row justify-start md:justify-between items-center md:gap-6'>
            <div className='flex flex-row items-center gap-4 h-10 md:h-16'>
              <div
                className='flex flex-row items-center w-[302px] md:w-[467px] h-full rounded-2xl'>
                <motion.div
                  variants={progressVariants(data.percent)}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  className={`flex items-center h-full bg-primary-300 rounded-2xl pl-6`}
                  style={{ width: `${data.percent}%` }}>
                  <motion.p
                    variants={leftVariants}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    className='text:sm md:text-lg font-semibold text-base-white'>{data.title}
                  </motion.p>
                </motion.div>
                <motion.div
                  variants={rightVariants}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  className='h-[1px] bg-neutral-800'
                  style={{ width: `${100 - data.percent}%` }}></motion.div>
              </div>
            </div>
            <div className='text:sm md:text-xl font-semibold text-base-white'>
              <Counter value={data.percent} />
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Skills