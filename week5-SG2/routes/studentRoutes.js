// routes/studentRoutes.js
import { Router } from "express";
import { requireAuth } from "../middlewares/requireAuth.js"; // NEW
import {
  createStudent,
  deleteStudent,
  getStudentByID,
  getStudents,
  updateStudent,
} from "../controllers/studentControllers.js";
import { validate } from "../middlewares/validate.js";
import {
  createStudentValidator,
  updateStudentValidator,
  idParamValidator,
} from "../validators/studentValidator.js";
const router = Router();
router.use(requireAuth); // NEW — applies to every route below
router.get("/", getStudents);
router.get("/:id", idParamValidator, validate, getStudentByID);
router.post("/", createStudentValidator, validate, createStudent);
router.put("/:id", updateStudentValidator, validate, updateStudent);
router.delete("/:id", idParamValidator, validate, deleteStudent);
export default router;
