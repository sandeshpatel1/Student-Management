const Student = require('../models/Student');

// GET all students
exports.getStudents = async (req, res) => {
    try {
      const { page = 1, limit = 10, department } = req.query;
      const query = department ? { department } : {};
  
      const students = await Student.find(query)
        .populate('enrolledCourses')
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));
  
      const total = await Student.countDocuments(query);
  
      res.json({
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        data: students
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// GET student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('enrolledCourses');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create new student
exports.createStudent = async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      if (err.code === 11000 && err.keyPattern?.email) {
        return res.status(400).json({ message: 'Student already registered with this email' });
      }
      res.status(400).json({ message: err.message });
    }
  };
  

// PUT update student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
