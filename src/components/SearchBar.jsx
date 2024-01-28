import React from 'react'
import voice from '../assets/mobile/Voice.svg'
const SearchBar = () => {
  return (
    <div className=''>
      <div className='flex gap-2 items-center justify-center'>
        <input className=' bg-[#F3F3F3] rounded-md w-[100%] p-3'
          placeholder='Search'>
        </input>
       
      </div>
    </div>
  )
}

export default SearchBar