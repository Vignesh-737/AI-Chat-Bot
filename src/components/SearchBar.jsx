import React, { useState } from 'react'

const SearchBar = ({onSend}) => {
const [inputPrompt, setinputPrompt]=useState("")
const sendPrompt=()=>{
  console.log(inputPrompt);
  onSend(inputPrompt);
  setinputPrompt("");
}
  return (<>
    <div>
        <div>
        <input type="search" name="Ask" value={inputPrompt} className='rounded-full bg-amber-50 px-4 py-3 text-black w-full outline-gray-800 mb-2'onChange={(e)=>setinputPrompt(e.target.value)} onKeyDown={(e)=>{e.key==="Enter"&&sendPrompt()}}/>
        </div>
    </div>
    </>
  )
}

export default SearchBar