import React, { useState } from 'react';
import axios from 'axios';

const NewEntry = ({ onAdd }) => {
    const [mood, setMood] = useState('')

    const addMood = async () => {
        try {
            const response = await axios.post('http://localhost:5000/todos', { mood });
            onAdd(response.data);
            setEntry('');
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div>
            <input type="number" value={mood} onChange={(moodInput) => setMood(moodInput.target.value)}/>
            <button onClick={addMood}>Set Mood</button>
        </div>
    );
};

export default NewEntry;