import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PortofolioData } from '@/constants/portofolio-data'


const Portofolio = () => {
  return (
    <div
      id='portofolio'
      className='flex flex-col justify-center gap-16 px-4 md:px-32 py-10 md:py-20'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='text-lg font-medium text-primary-200'>PORTOFOLIO</p>
        <h1 className='text-2xl md:text-5xl font-extrabold text-neutral-50'>REAL WORLD PROJECT</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {PortofolioData.map((data) => (
          <div
            key={data.id}
            className='group grid col-span-1 hover:cursor-pointer'>
            <div className='flex flex-col items-start justify-center gap-4'>
              <div className='relative rounded-xl overflow-hidden'>
                <Image
                  src={data.image}
                  width={381}
                  height={284}
                  alt='job1'
                  className='w-full h-auto block rounded-xl'
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-200 group-hover:bg-black/40" />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-200 group-hover:bg-black/40">
                  {data.link !== "" && (
                    <Button asChild
                      className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-8 text-sm md:text-base font-bold rounded-lg opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 pointer-events-auto'>
                      <a
                        href={data.link}
                        target='_blank'
                        aria-label='View case study'>
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className='text-2xl font-bold text-base-white'>
                {data.name}
              </div>
              {/* <div className='text-xs font-regular text-neutral-400'>
                {data.description}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Portofolio