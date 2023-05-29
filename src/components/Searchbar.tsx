import React from 'react';
import { MenuSearchBarIcon, searchIcon } from '../assets/icons/index';

type ElementProps = {
  isOpen: boolean;
  handleIsOpen: () => void;
  handleInput: (input: string) => void;
  input: string;
  placeholder: string;
};

export default function Searchbar({
  isOpen,
  handleIsOpen,
  handleInput,
  input,
  placeholder,
}: ElementProps) {
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
            {isOpen ? (
              <input
                onChange={(e) => {
                  handleInput(e.target.value);
                }}
                value={input}
                className='w-full border-none outline-none focus:outline-none focus:ring-0'
                type='text'
              />
            ) : (
              <div className='flex basis-10/12 flex-col' onClick={handleIsOpen}>
                <div className='w-full text-start font-medium'>
                  <span>{placeholder}</span>
                </div>
                <div className='flex w-full text-sm text-[#717171]'>
                  <div>
                    <span>Any week</span>
                  </div>
                  <div className='px-1.5' aria-hidden='true'>
                    •
                  </div>
                  <div>
                    <span>Add guest</span>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
        <div className='flex basis-2/12 items-center justify-center'>
          {MenuSearchBarIcon}
        </div>
      </div>
    </div>
  );
}
