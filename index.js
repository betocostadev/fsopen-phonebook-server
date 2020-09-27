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
  const id = Math.floor(Math.random() * Math.floor(1000))
  const double = persons.find(p => p.id === id)
  if (double) {
    generatePersonId()
  } else {
    return id
  }
}

app.get('/', (req, res) => {
  res.send(`
    <h1>Phonebook API is running!</h1>
    <h3>You can access the list of persons at <a href="http://localhost:3001/api/persons" target="_blank">Local host</a></h3>
    `)
})

app.get('/info/', (req, res) => {
  res.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  <p>Go <a href="../">back to home</a>`)
})

app.get('/api/persons/', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      error: 'Content missing'
    })
  }

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'Name and number must be provided'
    })
  }

  const personExists = persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())
  if (personExists) {
    return res.status(400).json({
      error: `${body.name} already in the Phonebook`
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generatePersonId()
  }
  persons = persons.concat(person)

  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  console.log(`Access it in: http://localhost:${PORT}/`)
})
