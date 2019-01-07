const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if(file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        callback(null, true);
    } else {
        callback(new Error("Upload should only be pdf or docx"), false);
    }
}

const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
}});
const router = express.Router();

const resume_controller = require('../controllers/resume.controller');

router.get('/resume_list', resume_controller.resume_list);
router.get('/tests', resume_controller.tests);
router.post('/create_resume', upload.single('resumeFile'), resume_controller.resume_create);
router.get('/:id', resume_controller.resume_details);
router.put('/:id/update_resume', resume_controller.resume_update);
router.delete('/:id/delete_resume', resume_controller.resume_delete);
router.delete('/remove_resumes', resume_controller.remove_resumes);

module.exports = router;