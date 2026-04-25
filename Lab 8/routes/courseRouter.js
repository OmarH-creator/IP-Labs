const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

router.get('/', async (req, res) => {
    const courses = await Course.find()
    res.json(courses)
})

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id)
    res.json(course)
})

router.post('/', async (req, res) => {
    const course = await Course.create(req.body)
    res.status(201).json(course)
})

router.put('/:id', async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(course)
})

router.delete('/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ message: 'Course deleted successfully' })
})

module.exports = router
