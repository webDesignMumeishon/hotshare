import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HeartIcon } from '@/assets/icons/index';
import { Daum } from '@/api/airbnbdata';

type ElementProps = {
  data: Daum;
};

export default function Card({ data }: ElementProps) {
  const router = useRouter();

  return (
    <div
      className='group col-span-1 cursor-pointer '
      onClick={() => router.push(`/listing/${data?.info?.id}`)}
    >
      <div className='flex w-full flex-col gap-2'>
        <div className='relative aspect-square w-full overflow-hidden rounded-xl'>
          <Image
            src={data.info.mainImage.url}
            alt='Listing'
            className='h-full w-full object-cover transition group-hover:scale-110'
            width={300}
            height={300}
          ></Image>
          <div className='absolute right-3 top-3'>
            <div className='relative cursor-pointer transition hover:opacity-80'>
              {HeartIcon}
            </div>
          </div>
        </div>
        <div className='text-lg font-semibold'>
          {data?.info?.location?.city},{' '}
          {data?.info?.location?.country?.title || ''}
        </div>
        <div className='font-light text-neutral-500'>{data.info.title}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>
            $ {data?.info?.price.toLocaleString() || ''}
          </div>
        </div>
      </div>
      <div className='h-90 2-80 relative'></div>
    </div>
  );
}
