import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { input } from "./src/functions.js"
import { getForm2 } from "./src/model_fetch.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Hello World!')})

app.post('/form', getForm2)
app.post('/input', input)

export const api = functions.https.onRequest(app)