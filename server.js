const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB model
const entrySchema = new mongoose.Schema({
    date: Date,
    sleep: [{
        amount: Number,
        bedtime: Number,
        waketime: Number
    }],
    exercise: [{
        length: Number,
        intensity: Number
    }],
    diet: [String],
    medications: [String],
    weather: Number,
    period: Boolean,
    events: [String],
    emotions: [String],
    mood: Number,
    entry: String,
});
const Entry = mongoose.model('Entry', entrySchema);

const userSchema = new mongoose.Schema({
    userID: Number,
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    enabledAttributes: [{
        sleep: [{
            amount: Boolean,
            bedtime: Boolean,
            waketime: Boolean,
        }],
        exercise: [{
            length: Boolean,
            intensity: Boolean
        }],
        diet: Boolean,
        medications: Boolean,
        weather: Boolean,
        period: Boolean,
        events: Boolean,
        entry: Boolean,
    }]
})
const User = mongoose.model('User', entrySchema);

// Connect front & backend
app.get('/entries', async (req, res) => {
    const entries = await Entry.find();
    res.json(entries);
  });

// Create a new entry
app.post('/entries', async (req, res) => {
    const newEntry = new Entry(req.body);
    await newEntry.save();
    res.json(newEntry);
});
// Update an existing entry
app.put('/entries/:id', async (req, res) => {
    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEntry);
});
// Delete an entry
app.delete('/entries/:id', async (req, res) => {
    await Entry.findByIdAndRemove(req.params.id);
    res.json({ message: 'Entry deleted successfully' });
});