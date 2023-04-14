import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { getForm } from "./src/functions.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Hello World!')})

app.get('/form', getForm)

export const api = functions.https.onRequest(app)