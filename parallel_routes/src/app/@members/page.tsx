import Link from 'next/link'
import React from 'react'
import Salaries from './salaries/page'

const Members = () => {
  
  return (
    <div className='border p-[10rem] w-[30rem]'>Members
    <Link href='/salaries'>Go To The Salaries Page</Link>
    </div>
  )
}

export default Members