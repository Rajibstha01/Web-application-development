// src/services/studentService.js
import { apiRequest } from "../api";
export async function getStudents(token) {
  return apiRequest("/students", { token });
}
export async function getStudentById(id, token) {
  return apiRequest(`/students/${id}`, { token });
}
export async function createStudent(data, token) {
  return apiRequest("/students", {
    method: "POST",
    body: data,
    token,
  });
}
export async function updateStudent(id, data, token) {
  return apiRequest(`/students/${id}`, {
    method: "PUT",
    body: data,
    token,
  });
}
export async function deleteStudent(id, token) {
  return apiRequest(`/students/${id}`, { method: "DELETE", token });
}
