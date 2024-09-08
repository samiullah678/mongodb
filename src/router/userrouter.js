import express from "express";
import usercontroller from "../controller/usercontroller.js";
const {registerstudent,entercourses,enterenrollment,getstudent}=usercontroller;
const router= express();
router.post("/register1",registerstudent);
router.post("/courses",entercourses);
router.post("/enroll",enterenrollment);
router.get("/getcourse/:id",getstudent);
export default router;