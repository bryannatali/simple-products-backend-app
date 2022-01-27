import express from "express"

import { initDatabase } from "./database"

import { routes } from "./routes"

initDatabase();

export const app = express()

app.use(express.json())

app.use(routes)