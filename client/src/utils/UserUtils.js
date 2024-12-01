import { useEffect, useState } from "react";
import { redirect, usePathname } from 'next/navigation';

const testuser = {
    'email' : 'test@journalytics.com',
    'password' : 'test',
    'firstname' : 'Test',
    'lastname' : 'User',
    'username' : 'testuser'
}

export const

// checks if account already exists
// returns: Bool
CheckAccountExists = (email) => {
    if (email == testuser.email) {
        return true;
    }
    return false;
},

// creates new account with specified information
// returns: Tuple(Int, String) containing status code and message
CreateAccount = (userInfo) => {
    useEffect(() => {
        localStorage.setItem('username', userInfo.username)
    }, []);
    return (1, "Successful");
},

// checks for login details
// returns: Bool
CheckLoginCredentials = (email, password) => {
    if (email == testuser.email && password == testuser.password) {
        return true;
    }
    return false;
},

// resets password in database
// returns: Tuple(Int, String) containing status code and message
ResetPassword = (email, newpassword) => {
    return (0, "Not implemented");
},

IsLoggedIn = () => {
    return ("username" in localStorage);
},

HandleLoginStatus = () => {
    const pathname = usePathname();
    if (!("username" in localStorage)) {
        redirect('/login');
    }
},

Logout = () => {
    if ("username" in localStorage) {
        localStorage.removeItem("username")
        redirect('/')
    };

};