import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { getForm, input } from "./src/functions.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Hello World!')})

app.get('/form', getForm)
app.post('/input', input)

export const api = functions.https.onRequest(app)