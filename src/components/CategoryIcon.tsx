import React from 'react';

type ElementType = {
  imgSrc: string;
};

export default function CategoryIcon({ imgSrc }: ElementType) {
  return (
    <img
      src={imgSrc}
      alt='img icon'
      className='w-6 opacity-[0.6425339366515838]'
    />
  );
}
