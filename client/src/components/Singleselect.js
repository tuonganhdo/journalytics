import React, { useState } from 'react';

export default function Singleselect({title, values, appearance}) {
    let [activeChoice, setActiveChoice] = useState('');

    return(
        <div className="w-full flex flex-col gap-y-2">
            {appearance.showTitle && <p className="font-medium text-sm">{title}</p>}
            <div className="w-full flex flex-row flex-wrap gap-x-1 gap-y-1">
                {values.map((val) => (
                    <button 
                        className={`flex flex-row w-fit rounded-md px-2 text-xs items-center border-[1px] border-zinc-100 ${(activeChoice == val[0]) ? "bg-zinc-100" : ""}`} 
                        key={val[0].toLowerCase().replaceAll(" ", "")}
                        onClick={() => setActiveChoice(val[0])}
                    >
                        {appearance.showIcon && <div className="w-4 my-auto mr-2">{val[1]}</div>}
                        {val[0]}
                    </button>
                ))}
            </div>
        </div>
    );
}