import mongoose from "mongoose";
import { first, last } from "./seedHelper.js";
import { Student } from "../models/students.js";

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Sterch');

const sample =  array => array[Math.floor(Math.random()*array.length)]
const branchs = ['EE', 'CSE', 'MECH', 'CE', 'CHE', 'AE'];
const gender = ['M', 'F'];

const seed = async () => {
    await Student.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const c = new Student({
            firstName: sample(first),
            lastName: sample(last),
            roll: Math.floor(Math.random() * 89999 + 10000),
            gender: sample(gender),
            branch: sample(branchs)
        });
        await c.save();
    }
}

seed();
console.log("Done");