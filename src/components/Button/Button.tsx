import React from 'react'

type ButtonType = {
    text: string;
    color?: 'white' | 'red';
    txt_color?: 'white' | 'black';
    onClick?: () => void;
  
}

const Button = ({text, color, txt_color}:ButtonType) => {
  return (
      <>
          <button className={` px-5 py-2 rounded-md text-lg uppercase 
            font-bold tracking-[.05em] ${color == "white" ? "bg-white" : "bg-red"}
            border-red hover:border-red ${txt_color == "white" ? "text-slate-50" : "text-slate-950"}`}>
              {text}
          </button>
      </>
  )
}

export default Button