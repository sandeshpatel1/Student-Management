const { body } = require('express-validator');

// User validations
exports.validateRegister = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

// Student validations
exports.validateStudent = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('department').notEmpty().withMessage('Department is required')
];

// Course validations
exports.validateCourse = [
  body('title').notEmpty().withMessage('Course title is required'),
  body('description').optional().isLength({ max: 200 }).withMessage('Too long description')
];
