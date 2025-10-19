const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher');

router.get('/', teacherController.getAllTeachers);
router.get('/:teacherId', teacherController.getTeacherByTeacherId);
router.post('/', teacherController.createTeacher);
router.put('/:teacherId', teacherController.updateTeacher);
router.delete('/:teacherId', teacherController.deleteTeacher);

module.exports = router;
