import express from 'express'
const PORT = 3000
const app = express()

// json middleware
app.use(express.json())
 
//GET request or get all items

app.get('/api/items', (req, res) => {
    res.status(200).json({ message: 'GET request - Fetching all items' });
})
