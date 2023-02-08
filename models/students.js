import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F'],
        maxlength: 1
        
    },
    branch: {
        type: String,
        required: true,
    enum:['EE','CSE','MECH','CE','CHE','AE']}
});

const Student = mongoose.model('Student', StudentSchema);

export { Student };