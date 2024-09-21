import express from 'express'
const PORT = 3000
const app = express()

// json middleware
app.use(express.json())

// array of user's data
let users = [
    {id : 1, name: "saba", email: "saba12@gmail.com"},
    {id : 2, name: "aqsa", email: "aqsa12@gmail.com" },
    {id : 3, name: "samia", email: "samia12@gmail.com"}
];

 
//GET request or get all items

app.get('/api/users', (req, res) => {
    res.status(200).json({ message: 'GET request - Fetching all items' });
})


// start the server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})