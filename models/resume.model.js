const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResumeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true, max:12},
    city: {type: String, required: true},
    countryCode: {type: String, required: true, max:2},
    linkedInUrl: {type: String},
    githubUrl: {type: String},
    workExperience: [{
        fromDate: { type: Date, default: Date.now, required: true},
        toDate: { type: Date, default: Date.now, required: true},
        responsibilities: [{type: String, required: true}],
        description: {type: String, required: true},
        title: {type: String, required: true},
        company: {type: String, required: true}
    }],
    resumeFiles: { type: String, required: true},
    skills: {
        // workingKnowledge: [{type: String, required: true}],
        // basicKnowledge: [{type: String, required: true}],
        // ide: [{type: String, required: true}]
    },
    education: [{
        // establishment: {type: String, required: true},
        // degree: {type: String, required: true},
        // edCity: {type: String, required: true},
        // edCountryCode: {type: String, required: true, max: 2},
        // fromYear: {type: Number, required: true, max: 4},
        // toYear: {type: Number, required: true, max: 4}
    }],
    languages: [{type: String, required: true, min:1}],
    hobbies: [{type: String, required: true, min:1}]
});

// Export the model
module.exports = mongoose.model('Resume', ResumeSchema);