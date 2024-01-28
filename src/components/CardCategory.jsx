import React from 'react'


const CardCategory = ({pic,Name}) => {
    return (
        <div className='flex items-center  space-y-2'>
            <div className=' space-y-2 '>
                <div className='flex items-center justify-center'>
                    <img src={pic} ></img>
                </div>

                <div className='flex items-center justify-center'>
                    <h1>{Name}</h1>
                </div>
            </div>

        </div>
    )
}

export default CardCategory