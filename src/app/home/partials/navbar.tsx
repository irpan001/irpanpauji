'use client'
import { navigationData } from '@/constants/navigation-data'
import React from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import Image from 'next/image'
import { X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'] // Ubah ke rgba(0,0,0,...) untuk hitam murni
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  const [open, setOpen] = React.useState(false)
  return (
    <motion.div
      style={{ background, backdropFilter: backdropBlur }}
      className='flex items-center justify-between h-20 w-full border-b border-neutral-800 px-4 lg:px-32 fixed top-0 z-80'>
      {/* left */}
      {/* ketika SheetTrigger ini diklik bagian ini hidden */}
      <div
        className={`flex items-center justify-start gap-4 ${open ? 'invisible' : 'visible'}`}>
        <div className='h-[1px] w-[25px] bg-white'></div>
        <h1 className='text-base md:text-xl font-bold text-primary-200'>IRPANPAUJI</h1>
      </div>
      {/* right */}
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-8'>
          {navigationData.map((data) => (
            <li key={data.label}>
              <Link
                href={data.href}
                className='text-base font-regular text-white hover:text-primary-200 hover:underline-offset-4 active:text-primary-200'
              >{data.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* mode mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        {/* ketika SheetTrigger ini active bagian ini hidden */}
        <SheetTrigger asChild>
          <Image
            src="/icon/icon-list.png"
            alt="icon-list"
            width={24}
            height={24}
            className={`block md:hidden ${open ? 'invisible' : 'visible'}`}
          />
        </SheetTrigger>
        <SheetContent className='w-full bg-base-black border-1 border-neutral-800 fixed top-0 z-80'>
          <SheetHeader className='flex flex-row items-center justify-between h-20 w-full border-b border-neutral-800 z-90'>
            <SheetTitle asChild>
              <div className='flex flex-row items-center justify-start gap-4'>
                <div className='h-[1px] w-[25px] bg-white'></div>
                <h1 className='text-base md:text-xl font-bold text-primary-200'>IRPANPAUJI</h1>
              </div>
            </SheetTitle>
            <SheetClose asChild>
              <X className="h-6 w-6 text-base-white" />
            </SheetClose>
          </SheetHeader>
          <ul className='flex flex-col items-start gap-4 p-4'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  onClick={() => setOpen(false)}
                  className='text-base font-regular text-white hover:text-primary-200 hover:underline-offset-4 active:text-primary-200'
                >{data.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </motion.div >
  )
}

export default Navbar