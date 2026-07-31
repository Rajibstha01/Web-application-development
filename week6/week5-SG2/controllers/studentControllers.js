import { StudentService } from "../services/studentService.js";
export async function getStudents(req, res) {
res.json(await StudentService.getAllStudents());
}
export async function getStudentByID(req, res) {
const student = await StudentService.getStudentById(req.params.id);
if (!student) return res.status(404).json({ message: "not found" });
res.json(student);
}
export async function createStudent(req, res) {
const student = await StudentService.createStudent(req.body);
res.status(201).json(student);
}
export async function updateStudent(req, res) {
const updated = await StudentService.updateStudent(req.params.id, req.body)
if (!updated) return res.status(404).json({ message: "not found" });
res.json(updated);
}