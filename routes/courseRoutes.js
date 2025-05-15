const express = require('express');
const { getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const protect = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getCourses);
router.post('/', protect, createCourse);
router.put('/:id', protect, updateCourse);
router.delete('/:id', protect, deleteCourse);

module.exports = router;
