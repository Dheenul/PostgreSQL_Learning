// const { Router } = require('express');
// const controller = require('./controller')
// const router = Router();

// router.get('/allstudents', controller.getStudents);

// module.exports = {
//     router,
// }

const express = require('express');
const router = express.Router();
const studentController = require('./controller')

router.get('/allstudents', studentController.getStudents);
router.get('/subjects', studentController.getSubjects);
router.get('/enrollements', studentController.getEnrollments);

module.exports = router;