'use client';

import { PostEntry, months, weekdays, sleepAmount, weather, exerciseIntensity } from "@/utils/EntryUtils";
import { Button } from '@headlessui/react'
import Multiselect from "./Multiselect";
import Singleselect from "./Singleselect";
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";
import { Plus } from 'lucide-react';

export default function EditEntry({entry}) {
    const today = new Date();

    const [addTag, setAddTag] = useState(false);

    return(
        <div className="w-full h-fit min-h-screen px-9 md:px-12 xl:px-20 pt-10 md:pt-14 xl:pt-24 flex flex-col gap-y-9 md:gap-y-16">
            {/* header  */}
            <div className="flex flex-col">
                {/* date */}
                <div className='flex flex-row space-x-3 content-center col-span-full h-fit mb-2'>
                    <p className="text-sm text-zinc-500 my-auto">{weekdays[entry.date.getDay()]}</p>
                    {
                        entry.date.getDate() == today.getDate() 
                        && entry.date.getMonth() == today.getMonth() 
                        && entry.date.getFullYear() == today.getFullYear()
                        && 
                        <div className="my-auto w-fit h-fit px-2 py-1 text-sm rounded-md bg-red-100 text-red-500">
                            <p>Today</p>
                        </div>
                    }
                </div>
                
                <h1 className="h-fit text-zinc-800 font-bold text-3xl col-span-full mb-4">{months[entry.date.getMonth()] + " " + entry.date.getDate() + ", " + entry.date.getFullYear()}</h1>
                
                {/* events */}
                <div className='h-fit flex flex-row gap-2 overflow-x-scroll no-scrollbar content-center col-span-full'>
                    {entry.events.map((eventName, i) => (
                        <div key={i} className="my-auto w-fit h-fit shrink-0 px-2 py-1 text-sm rounded-md bg-zinc-100 text-zinc-500">
                            <p>{eventName}</p>
                        </div>
                    ))}
                    <Button 
                        className="my-auto w-fit h-fit shrink-0 px-2 py-1 text-sm rounded-md border-[1px] border-zinc-200 text-zinc-500 font-medium"
                        onClick={() => setAddTag(false)}
                    >
                        Add event
                    </Button>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col-reverse md:flex-row h-full w-full gap-y-9 md:gap-y-0 md:gap-x-12">
                {/* text entry */}
                <TextareaAutosize 
                    name="entry" 
                    className="w-full md:w-3/5 min-h-[50vh] h-fit text-zinc-800 overflow- border-none focus:outline-none resize-none" 
                    placeholder="Start typing" 
                />

                {/* attributes */}
                <div className="w-full md:w-2/5 flex flex-col gap-y-4">
                    {/* out */}
                    <div className="w-full h-fit border-[1px] border-zinc-200 rounded-lg items-center p-4">
                        {/* mood */}
                    </div>

                    {/* in */}
                    <div className="flex flex-col w-full h-fit border-[1px] border-zinc-200 rounded-lg items-center p-4 gap-y-4">
                        <Multiselect title={"Weather"} values={weather} appearance={{"showTitle":true, "showIcon" : true}}/>
                        <div className="w-full h-fit flex flex-col gap-y-1">
                            <p className="font-medium text-sm">Exercise</p>
                            <Singleselect title={"Exercise Intensity"} values={exerciseIntensity} appearance={{"showTitle":false, "showIcon":true}}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}