import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/hotshare-logo-header.png';
import Searchbar from '@/components/Searchbar';
import { GlobalIcon, MenuIcon } from '../assets/icons/index';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { GuestIcon } from '../assets/icons/index';
import { useRouter } from 'next/router';

type ElementProps = {
  placeholder: string;
};

export default function Header({ placeholder }: ElementProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [numGuest, setNumGuest] = useState(1);

  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndtDate(ranges.selection.endDate);
  };

  const handleInput = (input: string) => {
    setSearchInput(input);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    router.replace(
      {
        pathname: '/search',
        query: {
          location: searchInput,
        },
      },
      undefined,
      { shallow: false }
    );
    setIsOpen(false);
    setSearchInput('');
  };

  const cancelSearch = () => {
    setIsOpen(false);
    setNumGuest(1);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-50 grid bg-white py-5 shadow-md md:grid-cols-3 md:px-10'>
      {/* Left Section */}
      <div
        className='relative my-auto hidden h-10 w-44 cursor-pointer items-center md:flex'
        onClick={() => router.push('/')}
      >
        <Image src={Logo} alt='hotshare logo' className='object-fill' />
      </div>

      {/* Middle Section */}
      <div>
        <Searchbar
          placeholder={placeholder}
          isOpen={isOpen}
          handleIsOpen={handleIsOpen}
          handleInput={handleInput}
          input={searchInput}
        />
      </div>

      {/* Right Section */}
      <div className='hidden items-center justify-end space-x-4 text-gray-500 md:flex'>
        <p className='hidden cursor-pointer md:inline'>Become a host</p>
        {GlobalIcon}
        <div className='flex items-center space-x-2 rounded-full border-2'>
          <div className='p-1'>{MenuIcon}</div>
          <div className='p-1'>
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'
              }
              className='w-6'
              alt=''
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='col-span-3 mx-auto flex flex-col '>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#329a9a']}
            onChange={handleSelect}
          />
          <div className='mb-4 flex items-center border-b'>
            <h2 className='flex-grow text-2xl font-semibold'>
              Number of Guest
            </h2>
            <div className='w-6 object-cover'>{GuestIcon}</div>
            <input
              value={numGuest}
              min={1}
              onChange={(e) => setNumGuest(Number(e.target.value))}
              type='number'
              className='w-12 border-none pl-2 text-lg text-[#329a9a] outline-none focus:outline-none focus:ring-0'
            />
          </div>
          <div className='flex'>
            <button className='flex-grow text-gray-500' onClick={cancelSearch}>
              Cancel
            </button>
            <button className='flex-grow text-[#329a9a]' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
