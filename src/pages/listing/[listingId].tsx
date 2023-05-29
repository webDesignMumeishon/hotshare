import React from 'react';
import { Daum } from '@/api/airbnbdata';
import { api } from '@/api/api';
import Header from '@/components/Header';
import Image from 'next/image';
import { HeartIcon } from '@/assets/icons';

type ElementProps = {
  listing: Daum;
};

export default function ListingPage({ listing }: ElementProps) {
  if (!listing) {
    return null;
  }

  return (
    <div>
      <Header placeholder={listing.info.location.country.title} />
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex flex-col gap-6'>
          <div className='p-4'>
            <h3 className=''>{listing.info.title}</h3>
            <div className='font-light text-neutral-500'>
              {listing.info.location.country.title}
            </div>
          </div>
          <div className='relative h-[60vh] w-full overflow-hidden rounded-xl'>
            <Image
              src={listing.info.mainImage.url}
              alt='Listing Image'
              fill
              className='w-full object-cover'
            />
            <div className='absolute right-5 top-5'>
              <div className='absolute right-3 top-3'>
                <div className='relative cursor-pointer transition hover:opacity-80'>
                  {HeartIcon}
                </div>
              </div>
            </div>
          </div>
          <div className='md:grid-cols7 mt-6 grid grid-cols-1 md:gap-10'>
            <div className='col-span4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center text-xl font-semibold'>
                  <div>Hosted by {listing.info.host?.name}</div>
                  <div className='p-4'>
                    <Image
                      src={listing.info.host?.avatar.url || ''}
                      width={40}
                      height={40}
                      className='rounded-full'
                      alt='avatar'
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center gap-4 font-light text-neutral-500'>
                  {listing.info.details.data.map((data, id) => (
                    <div className='flex flex-row gap-3'>
                      <div>
                        {data.type} {data.value}
                      </div>
                      {id === listing.info.details.data.length - 1 ? null : (
                        <div className='text-center'>•</div>
                      )}
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <div className='text-xl font-semibold'>Descriptions</div>
                  <div className='text-lg font-light text-neutral-500'>
                    {listing.info.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const listing = await api.getDataById(context?.query?.listingId || '');
  return {
    props: {
      listing,
    },
  };
}
