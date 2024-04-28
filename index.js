// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import mongoose from "mongoose";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { Student } from "./models/students.js";



mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Sterch');
// mongoose.connect('mongodb://onolax:123@127.0.0.1:27017/Sterch');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/Students', async (req, res) => {
    const students = await Student.find({});
    res.render('students/index', { students });
})

app.listen(3000, () => {
    console.log('Started Listening on 3000')
})
