

import mongoose, { Schema } from "mongoose";
mongoose.connect("mongodb://localhost:27017/finalstudent").then(()=>{console.log("connected")}).catch(()=>{console.log(err)});

const studentsschema=mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    studentemail:{
        type:String,
        required:true
    }
});
const students= mongoose.model("students",studentsschema);
const coursesschema=mongoose.Schema({
    coursename:{
        type:String,
        required:true
    },
    credithours:{
        type:Number,
        required:true
    }
});
const courses= mongoose.model("courses",coursesschema);
const enrollmentschema= mongoose.Schema({
    studentid:{
        type:Schema.Types.ObjectId,
        ref:"students"
    },
    courseid:{
        type:Schema.Types.ObjectId,
        ref:"courses"
    }
});
const enrollments= mongoose.model("enrollments",enrollmentschema);
export {mongoose,students,courses,enrollments};
