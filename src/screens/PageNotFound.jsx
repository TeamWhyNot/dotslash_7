import React from 'react'
import notFound from '../assets/PageNotFound.svg'
const PageNotFound = () => {
  return (
    <div>
      <div className="mob fade">
      <div className=' h-[100vh] w-full gap-[8rem] flex flex-col items-center'>
        <img src={notFound} alt="" />
        <h1 className=' font-semibold text-3xl'>Please switch to desktop!</h1>
      </div>
      </div>
      <div className=' desk fade h-[100vh] w-full gap-39 flex flex-col items-center'>
        <img src={notFound} alt="" />
        <h1 className=' font-semibold text-3xl'>Please switch to mobile!</h1>
        
    </div>
    </div>
  )
}

export default PageNotFound