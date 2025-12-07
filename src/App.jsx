import React from 'react'
import Game from './Component/Game'
import Results from './Component/Results'
import { useState } from 'react'
import Symbolselect from './Component/Symbolselect'
const App = () => {
  const [result, setresult] = useState(false)
  const [symbol, setsymbol] = useState(null)
  const [draw, setdraw] = useState(false)
   const [chance, setchance] = useState(0)
   const [symbolselect, setsymbolselect] = useState(true)
  return (
    symbolselect?<Symbolselect setsymbol={setsymbol} setsymbolselect={setsymbolselect}/>:<div className='relative bg-zinc-900 w-full h-screen flex flex-col gap-8 items-center justify-center sm:px-30'>
    <Game setresult={setresult} setsymbol={setsymbol} draw={draw} symbol={symbol} chance={chance} setchance={setchance} setdraw={setdraw}/>
    <Results result={result} symbol={symbol} draw={draw}/>

  </div>    
  )
}

export default App