import React from "react";

const Symbolselect = ({ setsymbol,setsymbolselect }) => {
  return (
    <div className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center text-zinc-200 gap-20 text-8xl">
      <h1 className="text-9xl">Tic Tac Toe</h1>
      <h1 className="text-5xl translate-y-16">Select</h1>
      <div className="flex gap-8"><button className="cursor-pointer" onClick={()=>(setsymbol("X"),setsymbolselect(false))}>X</button>/<button className="cursor-pointer" onClick={()=>(setsymbol("O"),setsymbolselect(false))}>O</button></div>
    </div>
  );
};

export default Symbolselect;
