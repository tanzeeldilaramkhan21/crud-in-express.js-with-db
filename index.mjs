import express from 'express'
const PORT = 3000
const app = express()

// json middleware
app.use(express.json())