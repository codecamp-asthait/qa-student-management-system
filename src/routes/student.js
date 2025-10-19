const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');


router.get('/', studentController.getAllStudents);
router.get('/:registrationId', studentController.getStudentByRegistrationId);
router.post('/', studentController.createStudent);
router.put('/:registrationId', studentController.updateStudent);
router.delete('/:registrationId', studentController.deleteStudent);

module.exports = router;
