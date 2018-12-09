const Resume = require('../models/resume.model');

exports.resume_list = function(req, res) {
    Resume.find({}, function(err, resumes) {
        var resumeList = {};

        resumes.forEach(function(resume) {
            resumeList[resume._id] = resume;
        });
        res.send(resumeList);
    })
}

exports.tests = function(req, res) {
    res.send('Greetings from the Test Controllers');
}

exports.resume_create = function(req, res) {
    
    

    let resume = new Resume(
        {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            countryCode: req.body.country_code,
            linkedInUrl: req.body.linkedin_url,
            githubUrl: req.body.github_url,
            workExperience: req.body.work_experience,
            skills: req.body.skills,
            education: req.body.education,
            languages: req.body.languages,
            hobbies: req.body.hobbies
        }
    );

    resume.save(function(err) {
        if(err) {
            return next(err);
        }
        res.redirect('/protected_page')
    })
};

exports.resume_details = function (req, res) {
    Resume.findById(req.params.id, function (err, resume) {
        if (err) return next(err);
        res.send(resume);
    })
};

exports.resume_update = function(req, res) {
    Resume.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, resume) {
        if(err) return next(err);
        res.send('Resume updated.');
    })
};

exports.resume_delete = function(req, res) {
    Resume.findByIdAndRemove(req.params.id, function(err) {
        if(err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.remove_resumes = function(req, res) {
    Resume.remove({}, function(err) {
        if(err) return next(err);
        res.send('Deleted all successfully!');
    })
}