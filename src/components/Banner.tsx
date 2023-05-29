import React from 'react';
import BannerImage from '../assets/banner.png';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src={BannerImage} alt='banner' className='object-cover ' />
    </div>
  );
}
