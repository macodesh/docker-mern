import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
})

export default app
