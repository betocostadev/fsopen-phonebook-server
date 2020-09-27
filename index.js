const express = require('express')
const app = express()

// Use the Express json parser to add notes that are sent using json format
app.use(express.json())


let persons = [
  {
    id: 1,
    name: "Arto Helas",
    number: "040-12345678"
  },
  {
    id: 2,
    name: "John Helas",
    number: "040-88998877"
  },
  {
    id: 3,
    name: "Joane Jane",
    number: "040-123459999"
  },
]

const generatePersonId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxId + 1
}

app.get('/', (req, res) => {
  res.send(`
    <h1>Phonebook API is running!</h1>
    <h3>You can access the list of persons at <a href="http://localhost:3001/api/persons" target="_blank">Local host</a></h3>
    `)
})

app.get('/api/persons/', (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  console.log(`Access it in: http://localhost:${PORT}/`)
})
