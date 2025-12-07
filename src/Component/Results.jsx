import React, { useEffect } from 'react'
const Results = ({result,symbol,draw}) => {
  useEffect(() => {
    
  }, [draw,result])
  const handler=()=>{
    window.location.reload()
  }
  return (
    <div className={`text-white ${(result||draw)?"block":"hidden"} z-20 sm:text-9xl flex flex-col gap-8 text-7xl backdrop-blur-md w-full h-full flex items-center justify-center`}>{draw?<h1>Game Draw</h1>:<h1>Winner is {symbol}</h1>}
    <button className='border-1 text-2xl px-8 py-2' onClick={handler}>Play Again</button>
    </div>

  )
}

export default Results