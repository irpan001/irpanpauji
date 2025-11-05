'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { workingWithMeData, anotherTalentData } from '@/constants/choice-data'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const Choice = () => {
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } // animasi halus 0.6s
    }
  }
  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } // animasi halus 0.6s
    }
  }
  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  // ref + inView untuk section Skills
  const choiceRef = useRef<HTMLDivElement | null>(null)
  const choiceInView = useInView(choiceRef, { once: true, amount: 0.25 })
  // -> true kalau minimal 25% elemen keliatan, dan cuma sekali trigger
  return (
    <div className='flex flex-col gap-12 px-4 md:px-30 py-10 md:py-20'>
      <motion.div
        ref={choiceRef}
        variants={fromBottom}
        initial="hidden"
        animate={choiceInView ? "visible" : "hidden"}
        className='flex flex-col gap-2 justify-center items-center'>
        <div className='text:md md:text-lg font-medium text-primary-200'>WORKIN</div>
        <div className='text-3xl font-extrabold text-base-white'>WHY CHOOSE ME</div>
      </motion.div>
      <div className='grid grid-cols-2 gap-20'>
        <motion.div
          ref={choiceRef}
          variants={leftVariants}
          initial="hidden"
          animate={choiceInView ? "visible" : "hidden"}
          className='grid col-span-2 md:col-span-1'>
          <div className='flex flex-col gap-8'>
            <div className='text-xl md:text-[28px] font-semibold text-base-white text-center'>WORKING WITH ME</div>
            {workingWithMeData.map((data) => (
              <div
                key={data.id}
                className='flex flex-col gap-8'>
                <div
                  className='flex flex-row justify-start items-center gap-3'>
                  <Image
                    src={'/icon/Icon-bintang.png'}
                    alt='Icon-bintang'
                    width={32} height={32}
                    className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
                  <div className='text-md md:text-xl font-bold text-[#FDFDFD]'>{data.title}</div>
                </div>
                {data.isLine ? <div className='h-[1px] w-full bg-neutral-800'></div> : null}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={choiceRef}
          variants={rightVariants}
          initial="hidden"
          animate={choiceInView ? "visible" : "hidden"}
          className='grid col-span-2 md:col-span-1'>
          <div className='flex flex-col gap-8'>
            <div className='text-xl md:text-[28px] font-semibold text-base-white text-center'>ANOTHER TALENT</div>
            {anotherTalentData.map((data) => (
              <div
                key={data.id}
                className='flex flex-col gap-8'>
                <div
                  className='flex flex-row justify-start items-center gap-3'>
                  <Image
                    src={'/icon/Icon-bintang.png'}
                    alt='Icon-bintang'
                    width={32} height={32}
                    className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] opacity-40" />
                  <div className='text-md md:text-xl font-regular text-neutral-400'>{data.title}</div>
                </div>
                {data.isLine ? <div className='h-[1px] w-full bg-neutral-800'></div> : null}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div >
  )
}

export default Choice