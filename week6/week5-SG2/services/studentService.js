import { Student } from "../models/studentModels.js";
export const StudentService = {
  getAllStudents: () => Student.findAll(),

  getStudentById: (id) => Student.findByPk(id),

  createStudent: (data) =>
    Student.create({ name: data.name, course: data.course }),
  
  updateStudent: async (id, data) => {
    const student = await Student.findByPk(id);
    if (!student) return null;
    if (data.name !== undefined) student.name = data.name;
    if (data.course !== undefined) student.course = data.course;
    await student.save();
    return student;
  },
};
