'use client';

import { Field, Label, Description, Input } from '@headlessui/react'
import { AlertCircle, BookHeart, CircleAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { CheckLoginCredentials, CheckAccountExists } from '@/utils/UserUtils';
import { useRouter, redirect } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [noAccount, setNoAccount] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [loginValid, setLoginValid] = useState(false);

    const router = useRouter();

    const signIn = () => {
        // error messages
        setEmptyEmail(email == '');
        setNoAccount(!CheckAccountExists(email));
        setInvalidCredentials(!CheckLoginCredentials(email, password));
        setEmptyPassword(password == '');

        // check if login is valid
        if (!(email == '' || password == '' || !CheckLoginCredentials(email, password) || !CheckAccountExists(email))) {
            localStorage.setItem('username', email);
            redirect('/');
        }
    }

    const clearErrors = () => {
        setNoAccount(false);
        setInvalidCredentials(false);
        setEmptyEmail(false);
        setEmptyPassword(false);
    }

    // useEffect(() => {
    //     if (loginValid) {
    //         if (typeof window !== 'undefined') {
    //             localStorage.setItem('username', email);
    //             // redirect('/');
    //         } else {
    //             alert('window undefined')
    //         }
    //     }
    // }, [loginValid]);

    return(
        <div className="w-screen h-screen flex flex-col items-center place-content-center gap-y-6">
            {/* icon */}
            <BookHeart strokeWidth={1} size={60} className="text-rose-300"/>

            {/* text */}
            <div>
                <p className="text-2xl font-semibold mb-1 text-center">Welcome back</p>
                <p className="text-zinc-600 text-center">Sign in with your email and password</p>
            </div>

            {/* form */}
            <div className="w-min h-fit flex flex-col gap-y-2">
                <Input 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={clearErrors}
                    className={`block rounded-lg border-[1px] ${(emptyEmail || noAccount) ? "border-rose-500 outline-2 outline-rose-500 -outline-offset-2" : "border-zinc-200"}  px-4 py-2 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-200`}/>
                {(emptyEmail || noAccount) && <div className="w-fill h-min flex flex-row gap-x-1.5 text-rose-500">
                    <AlertCircle size={16} strokeWidth={1.5} className="my-auto"/>
                    {emptyEmail && <p className="my-auto text-sm">Required field.</p>}
                    {!emptyEmail && noAccount && <p className="my-auto text-sm">Account doesn't exist. <Link href='/register' className="underline underline-offset-2 hover:text-rose-400">Register</Link>?</p>}
                </div>}

                <Input 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={clearErrors}
                    className={`block rounded-lg border-[1px] ${(!emptyEmail && !noAccount && (emptyPassword || invalidCredentials)) ? "border-rose-500 outline-2 outline-rose-500 -outline-offset-2" : "border-zinc-200"}  px-4 py-2 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-200`}/>
                {!emptyEmail && !noAccount && (emptyPassword || invalidCredentials) && <div className="w-fill h-min flex flex-row gap-x-1.5 text-rose-500">
                    <AlertCircle size={16} strokeWidth={1.5} className="my-auto"/>
                    {emptyPassword && <p className="my-auto text-sm">Required field.</p>}
                    {!emptyPassword && invalidCredentials && <p className="my-auto text-sm">Incorrect password. <Link href='/forgot-password' className="underline underline-offset-2 hover:text-rose-400">Reset</Link>?</p>}
                </div>}
                
                <button 
                    className="w-fill rounded-lg bg-rose-300 hover:bg-rose-400 text-white font-medium px-4 py-2"
                    onClick={signIn}
                >Sign in</button>
            </div>


            {/* switch to create account */}
            <div className="flex flex-row text-sm text-zinc-500">
                <p>Don't have an account? <Link href='/register' className="underline underline-offset-2 text-rose-300 hover:text-rose-400">Register</Link></p>
            </div>
        </div>
    );
}