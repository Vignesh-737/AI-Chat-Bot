import React, { useState } from 'react'
import History from './components/History'
import './index.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'

const App = () => {
  const [messages, setmessages] = useState([]);
  const [history, sethistory] = useState([]);
  const [showHistory, setshowHistory] = useState(true);

  const sendprompt = async (text) => {
  const response = await axios.post("http://localhost:5000/chat",{message:text,});
  const data=response.data.reply;

  setmessages(old => [
    ...old,
    { role: "user", text },
    { role: "ai", text: data }
  ]);


  sethistory(old => [...old, text]);
};

  return (
    <>
    <div className="flex h-screen relative">
      <button className='rounded-lg absolute left-4 top-4 bg-gray-800 px-3 py-1' onClick={()=>setshowHistory(prev=>!prev)}>{showHistory?"Hide":"Show"}</button>
      {showHistory && <History history={history}/>}
        <div className="flex-1 flex flex-col bg-black text-white">
          <div className="p-4">
            <h1 className='searchBar text-center border-b-2 pb-2 text-xl'>AI CHAT BOT</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg,i)=>(
              <div className={`
      px-4 py-2 rounded-xl mb-3 whitespace-pre-wrap leading-relaxed
      ${msg.role === "user" 
        ? "bg-blue-600 ml-auto max-w-xs" 
        : "bg-gray-700 mr-auto max-w-lg"} 
    `}
  >
{msg.text}</div>
            ))}
          </div>
            <SearchBar onSend={sendprompt}/>
        </div>
      </div>
    </>
  )
}

export default App