import React from 'react'
import voice from '../assets/mobile/Voice.svg'
const SearchBar = () => {
  return (
    <div className='p-2'>
      <div className='flex gap-2 items-center justify-center'>
        <input className=' bg-[#F3F3F3] rounded-md w-[80%] p-3'
          placeholder='Search'>
        </input>
        <img src={voice}></img>
      </div>
    </div>
  )
}

export default SearchBar