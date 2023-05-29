import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { api } from '@/api/api';
import { Daum } from '@/api/airbnbdata';
import Card from '@/components/Card';

type ElementProps = {
  searchResults: Daum[];
};

export default function Search({ searchResults }: ElementProps) {
  const router = useRouter();
  const { location } = router.query;
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState<Daum[]>([]);
  let capitalizedString = location;

  if (typeof location === 'string') {
    capitalizedString = location.charAt(0).toUpperCase() + location.slice(1);
  }

  useEffect(() => {
    const doFetch = async () => {
      if (typeof location === 'string') {
        setLoading(true);
        const searchResults = await api.getDataByLocation(location);
        setListing(searchResults);
        setLoading(false);
      }
    };
    doFetch();
  }, [location]);

  return (
    <div>
      <Header placeholder={`${capitalizedString as string}`} />
      <main className='flex'>
        <section>
          <div className='grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            {!loading &&
              listing?.map((item) => {
                return <Card key={item?.info?.id} data={item}></Card>;
              })}
          </div>
        </section>
      </main>
    </div>
  );
}
