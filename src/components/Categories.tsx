import CategoryBox from '@/components/CategoryBox';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { Category } from '@/api/airbnbdata';

type ElementProps = {
  categories: Category[];
};

export default function Categories({ categories }: ElementProps) {
  const params = useSearchParams();
  const category = params?.get('category');

  return (
    <div className='flex flex-row items-center justify-between overflow-x-auto pt-4'>
      {categories.map((item) => {
        return (
          <CategoryBox
            key={item.id}
            label={item.title}
            selected={category === item.title}
          ></CategoryBox>
        );
      })}
    </div>
  );
}
