require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

const morgan = require('morgan')

app.use(express.static('build'))
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

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(requestLogger)

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

app.get('/', (request, response) => {
  response.send(`
    <h1>Phonebook API is running!</h1>`)
})

app.get('/info/', (request, response) => {
  response.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  <p>Go <a href="../">back to home</a>`)
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons/', (request, response) => {
  const body = request.body
  console.log(body)
  if (!body) {
    return response.status(400).json({
      error: 'Content missing'
    })
  }

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name and number must be provided'
    })
  }

  const person = new Person ({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
