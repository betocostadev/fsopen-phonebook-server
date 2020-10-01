const express = require('express')
const app = express()
const cors = require('cors')

const morgan = require('morgan')

// Use the Express json parser to add notes that are sent using json format
app.use(express.json())

// Use CORS to allow Cross-Origin Resource Sharing
app.use(cors())


const logger = function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}

app.use(morgan(logger))

app.use(express.static('build'))

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(requestLogger)

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)


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
    <h1>Phonebook API is running!</h1>`)
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  console.log(`If in localhost, access it in: http://localhost:${PORT}/`)
})
