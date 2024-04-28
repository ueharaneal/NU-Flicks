import React from 'react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
function Home() {
  return (
    <div className='flex flex-col max-w-5/6 justify-center items-center text primary mt-20'>
      <h1 className='text-7xl'>Welcome to <span className='text-primary'>NU Flicks</span></h1>
      <h2 className='text-2xl'>The best movie review media</h2>
      <h2>By Neal Uehara</h2>
    </div>
  )
}

export default Home
