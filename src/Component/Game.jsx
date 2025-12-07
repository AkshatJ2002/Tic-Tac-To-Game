import React from "react";
import { useState, useEffect } from "react";
const Game = ({
  setresult,
  symbol,
  setsymbol,
  setdraw,
  chance,
  setchance,
  draw,
}) => {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");
  const [e, sete] = useState("");
  const [f, setf] = useState("");
  const [g, setg] = useState("");
  const [h, seth] = useState("");
  const [i, seti] = useState("");
  const [firstRender, setFirstRender] = useState(true);

  const handler = () => {
    if (a && b && c && a === b && b == c) return setresult(true);
    if (d && e && f && d === e && e === f) return setresult(true);
    if (g && h && i && g === h && h === i) return setresult(true);
    if (a && d && g && a === d && d === g) return setresult(true);
    if (b && e && h && b === e && e === h) return setresult(true);
    if (c && f && i && c === f && f === i) return setresult(true);
    if (a && e && i && a === e && e === i) return setresult(true);
    if (c && e && g && c === e && e === g) return setresult(true);
    symbol === "X" ? setsymbol("O") : setsymbol("X");
    setchance((prev) => prev + 1);
  };
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    handler();
  }, [a, b, c, d, e, f, g, h, i]);
  useEffect(() => {
    
    if (chance === 9) return setdraw(true);
  }, [chance]);

  return (
    <div className="fixed bg-zinc-200  flex flex-col items-center gap-4">
      <div className="flex flex-row gap-4">
        <div
          onClick={() => { if (!a) seta(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {a}
        </div>
        <div
          onClick={() => { if (!b) setb(symbol) }}
          className="bg-zinc-800 sm:w-50 sm:h-50 text-9xl w-30 h-30 text-white flex items-center justify-center"
        >
          {b}
        </div>
        <div
          onClick={() => { if (!c) setc(symbol) }}
          className="bg-zinc-800 sm:w-50 sm:h-50 text-9xl w-30 h-30 text-white flex items-center justify-center"
        >
          {c}
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div
          onClick={() => { if (!d) setd(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {d}
        </div>
        <div
         onClick={() => { if (!e) sete(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {e}
        </div>
        <div
          onClick={() => { if (!f) setf(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {f}
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div
         onClick={() => { if (!g) setg(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {g}
        </div>
        <div
         onClick={() => { if (!h) seth(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {h}
        </div>
        <div
          onClick={() => { if (!i) seti(symbol) }}
          className="bg-zinc-800 sm:w-50 w-30 h-30 sm:h-50 text-9xl text-white flex items-center justify-center"
        >
          {i}
        </div>
      </div>
    </div>
  );
};

export default Game;
