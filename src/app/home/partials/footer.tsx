'use client'

import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-neutral-800 bg-base-black text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-32 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-neutral-400">
          <p>© {year} IRPAN PAUJI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
