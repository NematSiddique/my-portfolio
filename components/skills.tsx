"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { 
    opacity: 0, 
    y: 100, 
  },
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.05 * index, 
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills' 
      ref={ref} 
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      
      <SectionHeading>My Skills</SectionHeading>
      
      <ul 
        className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'
      >
        {skillsData.map((skill, index) => (
          <motion.li 
            className='bg-gray-50 border border-[#3B82F6] rounded-lg px-5 py-2 dark:bg-white/10 dark:text-white/80 shadow-xl dark:border-[#2363cc] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-[#1E40AF] hover:text-gray-950 active:scale-105 cursor-pointer'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
};
