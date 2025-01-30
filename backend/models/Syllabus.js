const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  program: {
    type: String,
    enum: ['MCA', 'BCA'], // Allow only MCA or BCA
    required: true
  },
  courseCode: {
    type: String,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    required: true
  },
  courseSections: {
    otherSections: {
      courseObjective: String,
      courseOutcome: String,
      courseOverview: String
    }
  },
  syllabus: {
    unit1: {
      content: String,
      experientialLearning: [String] // Array of experiential learning activities
    },
    unit2: {
      content: String,
      experientialLearning: [String]
    },
    unit3: {
      content: String,
      experientialLearning: [String]
    },
    unit4: {
      content: String,
      experientialLearning: [String]
    }
  },
  anchorFaculty: String,
  createdTime: {
    type: Date,
    default: Date.now
  },
  finalized: {
    type: Boolean,
    default: false
  }
})

const syllabus = mongoose.model('Syllabus', syllabusSchema, 'Syllabus')

module.exports = syllabus;