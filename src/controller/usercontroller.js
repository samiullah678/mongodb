import { mongoose,students,courses,enrollments } from "../config/db.js"
const registerstudent=async(req,res)=>{
    try{
        const {studentname,studentemail}=req.body;
    const result= await new students({
        studentname:studentname,
        studentemail:studentemail
    });
    const final= await result.save()
    res.json(final);
}catch(err){
    console.log(err);
}
};
const entercourses= async(req,res)=>{
    try{
        const {coursename,credithours}=req.body;
        const course= new courses({
            coursename:coursename,
            credithours:credithours
        });
        const result= await course.save();
        res.json(result);
    }
    

    catch(err){console.log(err)}
       
};
const enterenrollment= async(req,res)=>{
    try{
    const {studentid,courseid}=req.body;
    const result= await Promise.all(
        courseid.map( async (id)=>{
            const enrollment= await new enrollments({
                studentid:studentid,
                courseid:id
                
            });
            await enrollment.save();
            return enrollment ;
        })
        
    );
    res.json(result);
    }catch(err){
        console.log(err);
    }
};
const getstudent= async (req,res)=>{
    try{
        const {id}=req.params;
        const result=await enrollments.find({studentid:id}).populate("courseid");
        const result1= result.map((resu)=>{
            return resu.courseid.coursename;
        })
        
        res.json(result1);

    }catch(err){console.log(err)}
};
export  default {registerstudent,entercourses,enterenrollment,getstudent};