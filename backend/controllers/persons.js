const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', async (req, res) => {
    const persons = await Person.find({})
    res.json(persons)
})