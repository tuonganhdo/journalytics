'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Calendar from './Calendar';
import Account from './Account';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { X } from 'lucide-react';
import dayjs from 'dayjs';

export default function NavBar() {
    const pathname = usePathname();
    let [isOpen, setIsOpen] = useState(false);

    return(
        <div className="fixed left-0 top-0 h-screen w-screen hidden md:block md:w-60 border-r-zinc-200 border-r-[1px] bg-zinc-100">
            {/* account */}
            <button 
                className="relative h-16 w-full flex flex-row gap-x-3 items-center px-4"
                onClick={() => setIsOpen(true)}
            >
                <div className="w-7 h-7 rounded-full bg-zinc-700"></div>
                <p className="text-sm font-medium text-zinc-800 hover:font-semibold">Username</p>
            </button>

            {isOpen && <div className="w-screen h-screen bg-black bg-opacity-15 absolute top-0 left-0" onClick={() => setIsOpen(false)}/>}
            <Dialog 
                open={isOpen} 
                as="div" 
                onClose={() => setIsOpen(false)} 
                className="z-10"
                >
                <DialogPanel
                    transition
                    className="w-4/5 h-4/5 bg-white rounded-lg overflow-y-scroll overflow-x-clip absolute left-[10%] top-[10%] p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                    <div className="w-full h-fit flex flex-row justify-between content-center">
                        <DialogTitle as="h3" className="text-xl font-semibold ">
                            Your Account
                        </DialogTitle>
                        <button
                        className="bg-none text-zinc-500"
                        onClick={() => setIsOpen(false)}
                        >
                            <X strokeWidth={1} size={20}/>
                        </button>
                    </div>
                    <Account/>
                </DialogPanel>
            </Dialog>
            
            {/* calendar */}
            <div className="w-full aspect-[6/7] bg-white border-y-[1px] border-y-zinc-200 p">
                <Calendar/>
            </div>

            {/* pages */}
            <div className="w-full h-fit pt-8 px-4 flex flex-col gap-y-1">
                <Link className={`px-3 py-2 rounded-md hover:bg-zinc-200 ${pathname == '/entries/' + dayjs(new Date).format('YYYYMMDD') ? 'font-medium bg-zinc-200 text-zinc-800' : 'text-zinc-600'}`} href='/today'>Today</Link>
                <Link className={`px-3 py-2 rounded-md hover:bg-zinc-200 ${pathname == '/entries/all' ? 'font-medium bg-zinc-200 text-zinc-800' : 'text-zinc-600'}`} href='/entries/all'>All Entries</Link>
                <Link className={`px-3 py-2 rounded-md hover:bg-zinc-200 ${pathname == '/statistics' ? 'font-medium bg-zinc-200 text-zinc-800' : 'text-zinc-600'}`} href='/statistics'>Statistics</Link>
            </div>
        </div>
    );
};