import { Router } from "express";
import { createStudent,  getStudentByID, getStudents, updateStudent } from "../controllers/studentControllers.js";
import { validate } from "../middlewares/validate.js";
import { createStudentValidator, idParamValidator, updateStudentValidator } from "../validators/studentValidator.js";

const router= Router();

router.get("/", getStudents);
router.get("/:id", idParamValidator, validate, getStudentByID);
router.post("/", createStudentValidator, validate, createStudent);
router.put("/:id", updateStudentValidator, validate, updateStudent);

export default router;