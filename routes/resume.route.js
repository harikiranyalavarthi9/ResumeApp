const express = require('express');
const router = express.Router();

const resume_controller = require('../controllers/resume.controller');

router.get('/resume_list', resume_controller.resume_list);
router.get('/tests', resume_controller.tests);
router.post('/create_resume', resume_controller.resume_create);
router.get('/:id', resume_controller.resume_details);
router.put('/:id/update_resume', resume_controller.resume_update);
router.delete('/:id/delete_resume', resume_controller.resume_delete);
router.delete('/remove_resumes', resume_controller.remove_resumes);

module.exports = router;