const express = require('express')
const Syllabus = require('../models/syllabus')
const router = express.Router();

// Create a new syllabus
router.post('/', async(req, res) => {
    try{
        const syllabus = new Syllabus(req.body)
        await syllabus.save();
        res.status(201).json(syllabus);
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//Get all the syllabi
router.get('/', async(req, res) => {
    try{
        const syllabi = await Syllabus.find();
        res.json(syllabi)
    }catch(error){
        res.status(500).json({error: error.message})
    }
    
})


//Delete a syllabus by coursecode

router.delete('/:courseCode', async(req, res) => {
    try{
        const result = await Syllabus.findOneAndDelete({ courseCode: req.params.courseCode })
        if(!result) return res.status(404).json({message: "Syllabus not found"})

        res.json({message: 'Syllabus deleted successfully'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

module.exports = router;
