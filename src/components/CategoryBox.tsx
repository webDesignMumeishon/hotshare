import CategoryIcon from '@/components/CategoryIcon';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import icons from '@/assets/icons/categories';

type ElementType = {
  label: string;
  selected: boolean;
};

export default function CategoryBox({ label, selected }: ElementType) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = {
      url: '/',
      query: updatedQuery,
    };

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-3 border-b-2 p-3 transition hover:text-neutral-800
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
    >
      <CategoryIcon
        imgSrc={
          icons[label]?.url ||
          'https://cdn.iconscout.com/icon/premium/png-256-thumb/not-available-6895554-5629420.png'
        }
      ></CategoryIcon>
      <div className='w-32 text-center text-sm font-medium'>{label || ''}</div>
    </div>
  );
}
