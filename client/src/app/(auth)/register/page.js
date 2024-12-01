'use client';
import { Field, Label, Description, Input } from '@headlessui/react'
import Link from 'next/link';
import { AlertCircle, BookHeart, Check, X } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { CheckLoginCredentials, CheckAccountExists } from '@/utils/UserUtils';
import { useRouter, redirect } from 'next/navigation';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);

    const checkPasswordValidity = () => {
        const passLength = /......../.test(password);
        const passUppercase = /[A-Z]/.test(password);
        const passLowercase = /[a-z]/.test(password);
        const passNumber = /\d/.test(password);

        setInvalidPassword(!(passLength && passUppercase && passLowercase && passNumber));
    }

    const checkEmailValidity = () => {
        setInvalidEmail(!(/.*@.*[.].*/.test(email)));
    }

    const createAccount = () => {
        // check if email and password are valid
        if (checkPasswordValidity() && checkEmailValidity()) {
            localStorage.setItem('username', email);
            redirect('/');
        }
    }

    const clearErrors = () => {
        setEmptyEmail(false);
        setInvalidEmail(false);
    }

    return(
        <div className="w-screen h-screen flex flex-col items-center place-content-center gap-y-6">
            {/* icon */}
            <div>
                <BookHeart strokeWidth={1} size={60} className="text-blue-300"/>
            </div>

            {/* text */}
            <div>
                <p className="text-2xl font-semibold mb-1 text-center">Welcome</p>
                <p className="text-zinc-600 text-center">Enter an email and password to continue</p>
            </div>

            {/* form */}
            <div className="w-min h-fit flex flex-col gap-y-2">
                <Input 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => {setEmail(e.target.value); checkEmailValidity();}}
                    onBlur={checkEmailValidity}

                    className={`block rounded-lg border-[1px] ${(emptyEmail || invalidEmail) ? "border-red-500 outline-2 outline-red-500 -outline-offset-2" : "border-zinc-200"}  px-4 py-2 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-200`}/>
                {(emptyEmail || invalidEmail) && <div className="w-fill h-min flex flex-row gap-x-1.5 text-red-500">
                    <AlertCircle size={16} strokeWidth={1.5} className="my-auto"/>
                    {emptyEmail && <p className="my-auto text-sm">Required field.</p>}
                    {!emptyEmail && invalidEmail && <p className="my-auto text-sm">Invalid email address.</p>}
                </div>}

                <Input 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => {setPassword(e.target.value); checkPasswordValidity();}}
                    onFocus={checkPasswordValidity}
                    onBlur={checkPasswordValidity}
                    className={`block rounded-lg border-[1px] ${(!emptyEmail && invalidPassword) ? "border-red-500 outline-2 outline-red-500 -outline-offset-2" : "border-zinc-200"}  px-4 py-2 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-200`}/>
                {!emptyEmail && invalidPassword && <div className="w-fill h-fit flex flex-col text-zinc-400 mb-1">
                    {/* password checklist */}
                    <p className="my-auto text-sm font-medium">Password must:</p>
                    <li className="list-none text-sm ">
                        <ul className={`${/......../.test(password) ? "" : "text-rose-500"} space-x-1`}>{/......../.test(password) ? <Check strokeWidth={1.5} size={16} className="inline my-auto"/> : <X strokeWidth = {1.5} size={16} className="inline my-auto"/>} Be at least 8 characters long</ul>
                        <ul className={`${/[A-Z]/.test(password) ? "" : "text-rose-500"} space-x-1`}>{/[A-Z]/.test(password) ? <Check strokeWidth={1.5} size={16} className="inline my-auto"/> : <X strokeWidth = {1.5} size={16} className="inline my-auto"/>} Contain at least 1 uppercase letter</ul>
                        <ul className={`${/[a-z]/.test(password) ? "" : "text-rose-500"} space-x-1`}>{/[a-z]/.test(password) ? <Check strokeWidth={1.5} size={16} className="inline my-auto"/> : <X strokeWidth = {1.5} size={16} className="inline my-auto"/>} Contain at least 1 lowercase letter</ul>
                        <ul className={`${/\d/.test(password) ? "" : "text-rose-500"} space-x-1`}>{/\d/.test(password) ? <Check strokeWidth={1.5} size={16} className="inline my-auto"/> : <X strokeWidth = {1.5} size={16} className="inline my-auto"/>} Contain at least 1 number</ul>
                    </li>
                </div>}
                
                <button 
                    className="w-fill rounded-lg bg-blue-300 hover:bg-blue-400 text-white font-medium px-4 py-2"
                    onClick={createAccount}
                >Create account</button>
            </div>

            {/* switch to create account */}
            <div className="flex flex-row text-sm text-zinc-500">
                <p>Already have an account? <Link href='/login' className="underline underline-offset-2 text-blue-300">Log in</Link></p>
            </div>
        </div>
    );
}

