"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sun, Cloudy, Wind, CloudRain, Snowflake, CloudLightning, CloudFog, Droplet, Flame, ThermometerSun, ThermometerSnowflake, SignalLow, SignalMedium, SignalHigh } from 'lucide-react';

const strokeWidth = 1;

export const

// checks if an entry exists for the specified date
// returns: Bool
EntryExists = (date) => {
    return false;
},

// fetches all entries meeting the criteria from database
// returns: Array[Entry]
FetchEntry = (criteria) => {
    const [entries, setEntries] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/entries')
             .then(response => setEntries(response.data))
             .catch(error => console.error(error));
    }, []);
    return entries;
},

// creates a new empty entry for the specified date
// returns: Entry
CreateEntry = (date) => {
    let newEntry = {
        "date": date,
        "sleep" : {
            "amount" : -1,
            "bedtime" : -1,
            "waketime" : -1
        },
        "exercise" : {
            "length" : -1,
            "intensity" : -1
        },
        "diet" : [],
        "medications" : [],
        "weather" : -1,
        "period" : -1,
        "events" : [],
        "emotions" : [],
        "mood" : -1,
        "entry" : ""
    }

    useEffect(() => {
        sessionStorage.setItem("currentEntry", newEntry);
    }, [newEntry]);

    return newEntry;
},

// posts updates to entry to database
// returns: Tuple(Int, String) containing status code and message
PostEntry = (entry) => {
    return (0, "Not implemented");
},

// deletes entry with the specified date from database
// returns: Tuple(Int, String) containing status code and message
DeleteEntry = (date) => {
    return (0, "Not implemented");
},

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

// weather attribute values & icons
weather = [
    ["Sunny", <Sun strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Cloudy", <Cloudy strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Windy", <Wind strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Rainy", <CloudRain strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Snowy", <Snowflake strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Stormy", <CloudLightning strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Foggy", <CloudFog strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Humid", <Droplet strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Dry", <Flame strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Warm", <ThermometerSun strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Cold", <ThermometerSnowflake strokeWidth={strokeWidth} className='w-full aspect-square'/>]
],

// sleep amount attribute values
sleepAmount = ["<1 hour", "1-2 hours", "2-3 hours", "3-4 hours", "4-5 hours", "5-6 hours", "6-7 hours", "7-8 hours", "8-9 hours", "9+ hours"],

// exercise intensity attribute values
exerciseIntensity = [
    ["Light", <SignalLow strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Moderate", <SignalMedium strokeWidth={strokeWidth} className='w-full aspect-square'/>],
    ["Vigorous", <SignalHigh strokeWidth={strokeWidth} className='w-full aspect-square'/>]
];