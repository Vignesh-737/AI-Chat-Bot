import React from 'react'

const History = ({history}) => {
  return (
    <div className="w-80 bg-gray-800 text-white p-4 h-screen rounded-3xl m-2 mb-4">
        <h2 className='text-center text-2xl font-bold pb-2 border-b-4 border-gray-500'>HISTORY</h2>
    <div className='pt-2.5 border-b border-gray-500'>
        {history.map((itm,index)=>(
              <p className=' border-b border-gray-500' key={index}>{itm}</p>
            ))}
    </div>
    </div>
  )
}

export default History