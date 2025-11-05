'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { faqData } from '@/constants/faq-data';

const Faq = () => {
  const fromBottom: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  // ref + inView untuk section Skills
  const faqRef = useRef<HTMLDivElement | null>(null)
  const faqInView = useInView(faqRef, { once: true, amount: 0.25 })
  // -> true kalau minimal 25% elemen keliatan, dan cuma sekali trigger
  return (
    <div
      id='faq'
      className='flex flex-col gap-12 px-4 md:px-30 py-10 md:py-20'>
      <motion.div
        ref={faqRef}
        variants={fromBottom}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        className='flex flex-col gap-2 justify-center items-center'>
        <div className='text-md md:text-lg font-medium md:font-semibold text-primary-200'>FAQ</div>
        <div className='text-md md:text-5xl font-extrabold text-base-white'>FREQUENTLY ASKED QUESTIONS</div>
      </motion.div>
      <motion.div
        ref={faqRef}
        variants={fromBottom}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20'>
        {faqData.map((data) => (
          <div
            key={data.id}
            className='grid col-span-1 p-4 rounded-2xl border-1 border-neutral-400 hover:border-primary-200'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row items-start justify-center gap-3'>
                <Image
                  src='/icon/icon-bintang.png'
                  width={32}
                  height={32}
                  alt='start'
                />
                <h2
                  className='text-2xl font-bold text-base-white'>
                  {data.ask}
                </h2>
              </div>
              <div className='text-base font-medium text-neutral-400'>
                {data.question}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </div >
  )
}

export default Faq