import React from 'react';
import { MenuSearchBarIcon, searchIcon } from '../assets/icons/index';

export default function SearchInput() {
  return (
    <div className='px-4 pt-2'>
      <div
        className='min-h- flex h-16 translate-x-px items-center rounded-full border-gray-600 shadow-md'
        style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
      >
        <div className='basis-10/12'>
          <button className='flex w-full flex-row items-center'>
            <div className='flex basis-2/12 justify-center  px-2'>
              <div className='rounded-3xl bg-[#329a9a] p-2'>{searchIcon}</div>
            </div>
          </button>
        </div>
        <div className='flex basis-2/12 items-center justify-center'>
          {MenuSearchBarIcon}
        </div>
      </div>
    </div>
  );
}
