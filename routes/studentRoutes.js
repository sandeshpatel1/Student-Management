const express = require('express');
const {
  getStudents, createStudent, getStudentById,
  updateStudent, deleteStudent
} = require('../controllers/studentController');
const { validateStudent } = require('../middlewares/validators');
const handleValidation = require('../middlewares/handleValidation');

const router = express.Router();

router.get('/', getStudents);
router.post('/', validateStudent, handleValidation, createStudent);
router.get('/:id', getStudentById);
router.put('/:id', validateStudent, handleValidation, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
